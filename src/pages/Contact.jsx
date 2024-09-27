import { Form } from "../components/Form";
import contato from "../assets/freepik.png";

export function Contact() {
    return (
        <div id="contato" className="mt-10 sm:mt-24 px-7 md:px-12 lg:px-24 2xl:px-72 dark:bg-black bg-gray-200 pb-5 2xl:pb-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-0">

                <div className="flex flex-col items-center sm:items-start">
                    <img src={contato} alt="contato" className="w-32 sm:w-5/6 2xl:w-4/6" />
                </div>

                <Form />

            </div>

            <div className="dark:text-white pt-10 2xl:pt-2 text-center">
                <p className="text-sm font-medium">Desenvolvido com &#128150; por Francine Cruz.</p>
            </div>
        </div>
    )
}
