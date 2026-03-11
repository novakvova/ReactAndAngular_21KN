import cat from '../assets/cat.webp'; // Relative path to the image file
// import Cropper from 'cropperjs';
// import {useRef} from "react";
// import Cropper, { ReactCropperElement } from "react-cropper";

const TestPage = () => {
    //Посилання на фото, яке буде працювати у Cropper
    // const imgRef =  useRef(null);

    // const cropperRef = useRef<ReactCropperElement>(null);
    // const onCrop = () => {
    //     const cropper = cropperRef.current?.cropper;
    //     console.log(cropper.getCroppedCanvas().toDataURL());
    // };

    return (
        <div>
            {/*<img src={cat}*/}
            {/*     alt="Фото для редагування кота"*/}
            {/*     ref={imgRef}*/}
            {/*/>*/}
            {/*<Cropper*/}
            {/*    src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"*/}
            {/*    style={{ height: 400, width: "100%" }}*/}
            {/*    // Cropper.js options*/}
            {/*    initialAspectRatio={16 / 9}*/}
            {/*    guides={false}*/}
            {/*    crop={onCrop}*/}
            {/*    ref={cropperRef}*/}
            {/*/>*/}
        </div>
    )
}

export default TestPage;