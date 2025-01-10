import React, { useContext } from 'react';
import {Link as ScrollableLink} from "react-scroll";
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { AppContext } from '@/lib/context';
// import { ActionType } from '@/lib/types';


function Form() {


    const context = useContext(AppContext);

    if (!context) {
        throw new Error('ProductList must be used within an AppProvider');
    }

    const {
        // state, dispatch
    } = context;


    // const addProduct = () => {
    //     const newProduct = { id: Date.now(), name: 'New Product', price: 100 };
    //     dispatch({ type: ActionType.AddProduct, payload: newProduct });
    // };

    const currentDate = new Date().toISOString().split('T')[0];

    return (<div id={"form"} className={"relative h-screen w-screen overflow-hidden flex flex-col justify-center" +
            " gap-20"}>
            <div className={"w-screen flex flex-col justify-center align-middle text-center mx-auto"}>
                <label className={"form_label text-center  text-2xl lg:text-5xl font-grotesk "} htmlFor="date">In ce
                    data va fi evenimetul?</label>
                <input
                    className={"form_text_input bg-transparent text-2xl lg:text-5xl mt-5 focus:outline-none font-grotesk" +
                        " form_text_input_date mx-auto"}
                    type="date"
                    id="date"
                    name="date"
                    required
                    defaultValue={currentDate}
                    min={currentDate}
                />
            </div>
            <div className={"w-screen flex flex-col justify-center align-middle"}>
                <label className={"form_label text-center text-2xl lg:text-5xl  font-grotesk"} htmlFor="invites">Cati
                    invitati for fi?(Aproximativ)</label>
                <input className={"form_text_input bg-transparent text-2xl lg:text-5xl mt-5 focus:outline-none" +
                    " text-center mx-auto  font-grotesk"}
                       type="text"
                       id="invites"
                       name="invites"
                       required
                       defaultValue={0}

                />
            </div>


            <div className={"absolute bottom-5 right-0 left-0 "}>
                <ScrollableLink to="menu" smooth={true} duration={500}
                                className={"flex justify-center text-xl text-center cursor-pointer font-mono mx-4" +
                                    " mb-8 " +
                                    " font-mono"}>
                    <ScrollAnimation/>
                </ScrollableLink>
            </div>
        </div>
    );
}

export default Form;