package org.berkley.lim.server.board;


import jakarta.validation.Valid;
import lombok.extern.log4j.Log4j2;
import org.berkley.lim.server.board.dto.BoardDTO;
import org.berkley.lim.server.board.entity.Board;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@Log4j2
@RestController
@RequestMapping("/api/board")
public class BoardController {

    /**
     * 이미지 보내기 테스트 진행
     * @param profileImage : 이미지 받기
     * @return : 결과 실시
     */
    @PostMapping("image-upload")
    public Board uploadImageFile(
            @RequestPart(value = "profileImage", required = false) @Valid MultipartFile profileImage
    ) {
        System.out.println("성공");

        log.info(profileImage.getContentType());
        log.info(profileImage);

        return Board
                .builder()
                .bno(1L)
                .profileImageId("")
                .build();
    }

    @PostMapping("admin-form")
    public void doRegisterAdminUser(
            @RequestPart(value = "profileImage", required = false) @Valid MultipartFile profileImage,
            @RequestPart(value = "adminFormDTO") @Valid BoardDTO boardDTO
            ) {

    }
}
