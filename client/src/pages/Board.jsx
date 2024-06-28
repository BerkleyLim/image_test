import React, {useState} from 'react';
import styles from '../css/board.module.css';
import axios from "axios";

const Board = () => {
  const [prevImageSrc, setPrevImageSrc] = useState('');
  const [blobProfileImage, setBlobProfileImage] = useState(null);
  const [input, setInput] = useState();


  const onChangeForm = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value
    })
  }


  const doRegisterAdminUser = async () => {
    let formData = new FormData();
    formData.append('profileImage', blobProfileImage)
    formData.append('adminFormDTO', blobProfileImage)

    await axios.post('http://localhost:8080/api/board/admin-form', formData)
      .then((data) => {
        console.log(data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  /**
   * 미리보기 적용
   * @param fileBlob : 파일 등록
   * @return {Promise<unknown>} : 이미지 미리보기 등록
   */
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        // let formData = new FormData();
        // formData.append('profileImage', fileBlob)

        // axios.post('http://localhost:8080/api/board/image-upload', formData)
        //   .then((data) => {
        //     console.log(data)
        //   })
        //   .catch((e) => {
        //     console.error(e)
        //   })

        setPrevImageSrc(reader.result);
        setBlobProfileImage(fileBlob);
        resolve();
      };
    });
  };

  return (
    <div className={`${styles?.boardContainer}`}>
      <h2 className={`${styles?.boardTitle}`}>어드민 등록</h2>
      <div className={`${styles?.boardForm}`}>
        <div className={`${styles?.boardContainerDivide}`}>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>프로필 이미지</div>
            <div className={`${styles?.boardImagePreview}`}>
              {prevImageSrc && <img src={prevImageSrc} alt={`preview-img`} width={`20%`} />}
            </div>
            <input
              type={`file`}
              name={`profileImageId`}
              className={`${styles?.boardCommonInput}`}
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>이름</div>
            <input
              type={`text`}
              name={`name`}
              className={`${styles?.boardCommonInput}`}
              onChange={(e) => onChangeForm(e)}
            />
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>전화번호</div>
            <input
              type={`text`}
              name={`phoneNumber`}
              className={`${styles?.boardCommonInput}`}
              onChange={(e) => onChangeForm(e)}
            />
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>이메일</div>
            <input
              type={`text`}
              name={`email`}
              className={`${styles?.boardCommonInput}`}
              onChange={(e) => onChangeForm(e)}
            />
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>주소</div>
            <input
              type={`text`}
              name={`addr`}
              className={`${styles?.boardCommonInput}`}
              onChange={(e) => onChangeForm(e)}
            />
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>생년월일</div>
            <input
              type={`text`}
              name={`userJumin1`}
              className={`${styles?.boardCommonInput}`}
              onChange={(e) => onChangeForm(e)}
            />
          </div>
        </div>
        <div className={`${styles?.boardContainerDivide}`}>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>계정 유형</div>
            <label className={`${styles?.boardCommonInput}`}>
              <input type={`radio`} name={`accountType`} value={'OWNER'}/>
              <span style={{fontWeight: 'bold'}}>OWNER</span> <span style={{color: '#ddd'}}>총괄 수정 권한 및 계정관리 전용</span>
            </label>
            <label className={`${styles?.boardCommonInput}`}>
              <input type={`radio`} name={`accountType`}/>
              <span style={{fontWeight: 'bold'}}>OWNER</span> <span style={{color: '#ddd'}}>총괄 수정 권한 및 계정관리 전용</span>
            </label>
            <label className={`${styles?.boardCommonInput}`}>
              <input type={`radio`} name={`accountType`}/>
              <span style={{fontWeight: 'bold'}}>OWNER</span> <span style={{color: '#ddd'}}>총괄 수정 권한 및 계정관리 전용</span>
            </label>
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>아이디 생성</div>
            <input type={`text`} name={`id`} className={`${styles?.boardCommonInput}`}/>
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>비밀번호</div>
            <input type={`text`} name={`password`} className={`${styles?.boardCommonInput}`}/>
          </div>
          <div className={`${styles?.boardCommonComponent}`}>
            <div className={`${styles?.boardCommonLabel}`}>비밀번호 확인</div>
            <input type={`text`} name={`passwordConfirm`} className={`${styles?.boardCommonInput}`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
