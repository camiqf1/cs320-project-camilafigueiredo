FROM maven:3.9.9-eclipse-temurin-17
WORKDIR /app
RUN apt-get update && apt-get install -y nodejs npm
COPY . .
RUN mvn package -DskipTests
RUN find target -maxdepth 4 -name "*.jar" -o -name "*.zip" | head -30
EXPOSE 8080
CMD ["echo", "build complete"]
