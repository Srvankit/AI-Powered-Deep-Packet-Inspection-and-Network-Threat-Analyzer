package com.ankit.deeppacketinspection.history.repository;

import com.ankit.deeppacketinspection.history.entity.AnalysisHistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnalysisHistoryRepository
        extends JpaRepository<AnalysisHistory, Long> {
}