import MyHeader from "../../common/MyHeader";
import MyButton from "../../common/MyButton";
import MyInput from "../../common/MyInput";
import type {ICreatePost} from "../../types/ICreatePost.ts";
import {useFormik} from "formik";
import {useCreatePostMutation} from "../../services/apiPosts.ts";
import MyInputPassword from "../../common/MyInputPassword";
import MyInputImage from "../../common/MyInputImage";

const RegisterPage = () => {

    const [createPost] =  useCreatePostMutation();
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації
    const initValues: ICreatePost = {
        title: "",
        body: "",
        userId: 0
    }
    const submitHandler = async (values: ICreatePost) => {
        try {
            const result = await createPost(values).unwrap();
            console.log("Відправка запиту на сервер", result);
        }catch(error) {
            console.log("Стался халепа, щось пішло не так", error)
        }
        // console.log(values);
    }

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });
    //handleChange
    const {handleSubmit, handleChange} = formik;

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
                <MyHeader text={"Реєстрація"}/>
                <form onSubmit={handleSubmit}>
                    <MyInput label={"Прізвище"}
                             placeholder={"Вкажіть прізвище"}
                             id={"lastName"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Ім'я"}
                             placeholder={"Вкажіть ім'я"}
                             id={"firstName"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Email"}
                             placeholder={"Вкажіть пошту"}
                             id={"email"}
                             onChange={handleChange}
                    />

                    <MyInputPassword label={"Пароль"}
                             placeholder={"Вкажіть пароль"}
                             id={"password"}
                             onChange={handleChange}
                    />

                    <MyInputImage label={"Фото користувача"}
                                     placeholder={"Оберіть фото"}
                                     id={"imageFile"}
                                     onChange={handleChange}
                                    objectFit = {"cover"}
                                  previewHeight = {"h-96"}
                    />
                    {/*<div className="mb-8">*/}
                    {/*    <label htmlFor="username"*/}
                    {/*           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">*/}
                    {/*        Username*/}
                    {/*    </label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="username"*/}
                    {/*        placeholder="johndoe"*/}
                    {/*        className="w-full px-4 py-2 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-2 border-red-300 dark:border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-colors"*/}
                    {/*    />*/}
                    {/*    <p className="mt-1 text-xs text-red-600 dark:text-red-400">Username вже зайнято</p>*/}
                    {/*</div>*/}


                    <MyButton text={"Створити"}/>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;