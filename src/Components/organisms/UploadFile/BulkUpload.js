import React, { useState } from 'react'
import { Flex } from '../../../Style/layout';
import Button from '../../atoms/Buttons/Button';
import Title from '../../atoms/Titles/Title'
import { UploadFileWrapper } from "./style";

function BulkUpload() {
    const [files, setFiles] = useState([]);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        console.log();
        const formData = new FormData();
        formData.append(file.name, file);
        formData.forEach((file) => setFiles([...files, file]));
    };
    return (
        <>
            <UploadFileWrapper>
                <Title margin={"5"} name={"Upload CSV document"} />
                <Flex>

                    <div className="uploadFile">
                        <label htmlFor="file">
                            <svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.1445 18.237L12.5731 19.6655L15.1972 17.0516V29.3818H17.2235V17.0516L19.8476 19.6655L21.2762 18.237L16.2104 13.1711L11.1445 18.237Z"
                                    fill="black"
                                />
                                <path
                                    d="M23.8097 22.2896H23.3031V20.2633H23.8097C25.0189 20.3117 26.1978 19.8777 27.087 19.0569C27.9762 18.236 28.5029 17.0956 28.5513 15.8864C28.5997 14.6772 28.1657 13.4984 27.3449 12.6091C26.5241 11.7199 25.3836 11.1932 24.1744 11.1448H23.3031L23.2018 10.314C22.977 8.60829 22.1399 7.04244 20.8463 5.90814C19.5527 4.77384 17.8909 4.14844 16.1704 4.14844C14.45 4.14844 12.7882 4.77384 11.4946 5.90814C10.201 7.04244 9.36386 8.60829 9.13908 10.314L9.11881 11.1448H8.24749C7.03831 11.1932 5.89786 11.7199 5.07704 12.6091C4.25621 13.4984 3.82225 14.6772 3.87062 15.8864C3.91899 17.0956 4.44572 18.236 5.33495 19.0569C6.22417 19.8777 7.40305 20.3117 8.61223 20.2633H9.11881V22.2896H8.61223C6.98753 22.2793 5.42397 21.6688 4.22217 20.5754C3.02038 19.4821 2.26518 17.983 2.10177 16.3665C1.93836 14.75 2.37827 13.1302 3.33694 11.8184C4.2956 10.5066 5.70534 9.59555 7.29512 9.26031C7.73251 7.22033 8.85624 5.39202 10.4788 4.08048C12.1014 2.76893 14.1246 2.05347 16.211 2.05347C18.2973 2.05347 20.3206 2.76893 21.9431 4.08048C23.5657 5.39202 24.6894 7.22033 25.1268 9.26031C26.7166 9.59555 28.1263 10.5066 29.085 11.8184C30.0437 13.1302 30.4836 14.75 30.3202 16.3665C30.1568 17.983 29.4016 19.4821 28.1998 20.5754C26.998 21.6688 25.4344 22.2793 23.8097 22.2896V22.2896Z"
                                    fill="black"
                                />
                            </svg>
                            Upload here...
                        </label>
                        <input type="file" id="file" onChange={handleUpload} />
                    </div>
                    <Button
                        name={"submit"}
                        margin={"2rem"}
                    />

                </Flex>
                {files.map((file, index) => (
                    <div className="files" key={index}>
                        {index + 1}. {file.name}
                    </div>
                ))}
            </UploadFileWrapper>
        </>
    );
};


export default BulkUpload
