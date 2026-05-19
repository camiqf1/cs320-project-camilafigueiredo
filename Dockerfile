FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
RUN apt-get update && apt-get install -y nodejs npm
COPY . .
RUN mvn package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/quarkus-app/lib/ /app/lib/
COPY --from=build /app/target/quarkus-app/*.jar /app/
COPY --from=build /app/target/quarkus-app/app/ /app/app/
COPY --from=build /app/target/quarkus-app/quarkus/ /app/quarkus/
EXPOSE 10000
ENV QUARKUS_HTTP_PORT=10000
ENV QUARKUS_HTTP_HOST=0.0.0.0
CMD ["java", "-jar", "/app/quarkus-run.jar"]
