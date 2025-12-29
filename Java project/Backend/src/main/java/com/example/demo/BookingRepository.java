package com.example.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	void deleteById(Long id);

	Optional<Booking> findById(Long id);

}
