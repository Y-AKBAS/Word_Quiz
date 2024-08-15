plugins {
    kotlin("jvm") version "1.9.24"
    kotlin("plugin.spring") version "1.9.24"
    id("org.springframework.boot") version "3.3.2"
    id("io.spring.dependency-management") version "1.1.6"
    id("org.graalvm.buildtools.native") version "0.10.2"
}

group = "com.htwk"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web") {
        exclude(group = "org.springframework.boot", module = "spring-boot-starter-tomcat")
    }
    implementation("org.springframework.boot:spring-boot-starter-undertow")
    implementation("org.springframework.boot:spring-boot-starter-data-jdbc")
    runtimeOnly("com.h2database:h2")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

kotlin {
    compilerOptions {
        freeCompilerArgs.addAll("-Xjsr305=strict")
    }
}

// Define a task to build the frontend
val staticFolderPath = "src/main/resources/static"

val frontendBuildTask = tasks.register<Exec>("buildFrontend") {
    workingDir = file("../ui")
    commandLine = listOf("npm.cmd", "run", "build")
}.get()

val cleanStaticFolder = tasks.register<Delete>("cleanStaticFolder") {
    val staticFolder = file(staticFolderPath)
    val files = staticFolder.listFiles()
    if (files != null) {
        delete(staticFolder.listFiles())
    }

    doLast {
        if (!staticFolder.exists()) require(staticFolder.mkdir()) { "Failed to create $staticFolder folder!" }
    }
}.get()

val copyFrontendBuildTask = tasks.register<Copy>("copyFrontendBuild") {
    dependsOn(frontendBuildTask, cleanStaticFolder)
    from("../ui/dist")
    into(staticFolderPath)
}.get()

tasks.getByName("processResources") {
    dependsOn(copyFrontendBuildTask)
}

tasks.withType<Test> {
    useJUnitPlatform()
}
