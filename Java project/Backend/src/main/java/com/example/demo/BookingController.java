package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/bookings")

public class BookingController {
	@Autowired
    private BookingRepository repo;

    @PostMapping

    public Booking save(@RequestBody Booking booking) {
        return repo.save(booking);
    }

    @GetMapping
    public List<Booking> getAll() {
        return repo.findAll();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {

        Optional<Booking> booking = repo.findById(id);

        if (booking.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Booking not found with id: " + id);
        }
     repo.delete(booking.get());
        return ResponseEntity.ok("Booking deleted successfully");
    }

}
