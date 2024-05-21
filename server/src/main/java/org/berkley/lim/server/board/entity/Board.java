package org.berkley.lim.server.board.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "board")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bno")
    private Long bno;
    private String profileImageId;

}
