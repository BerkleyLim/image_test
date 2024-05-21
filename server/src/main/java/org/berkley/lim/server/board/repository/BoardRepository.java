package org.berkley.lim.server.board.repository;

import org.berkley.lim.server.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long>, BoardCustomRepository {
}
