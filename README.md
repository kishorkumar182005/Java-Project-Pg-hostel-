# Java-Project-Pg-hostel-
Pg name is Dubai gents Pg. 
Combined PG Booking Projects(using Frontend and Backend code)
Location:(backend + frontend served together):

1) Prerequisities:
   -Java 17+ installed(java-version)
   -Maven installed(mvn-version)
   
2)Build & Run:
    cd backend
    mvn clean package
    mvn spring-boot run

3)Open in browser:
   http://localhost:8080/
   (the frontend files are served from Spring Boot static resources)

Notes:
  -This project uses your original Pghostel booking
  (adapted into the Spring boot Project).
  -Data is in-memory: restart the app to reset.
  -Endpoints:
  Post/api/bookings
  Get/api/bookings
  Delete/api/bookings/{id}

