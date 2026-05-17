FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
RUN apt-get update && apt-get install -y nodejs npm
COPY . .
RUN mvn package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/lib/ /app/lib/
COPY --from=build /app/target/cs320-project-camilafigueiredo-1.0.0-SNAPSHOT-runner.jar /app/app.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/app.jar"]
