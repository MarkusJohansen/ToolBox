interface adStep {
    step: number;
    title: string;
    children: React.ReactNode;
}

const Circkle = (props: adStep) => {
    return (
<       div className="flex justify-center items-center h-20 w-20 rounded-full bg-black mx-10">
                    <p className="text-white text-bold text-3xl">
                        {props.step}
                    </p>
                </div>
)}

const AdCreatorStep = (props: adStep) => {
    return (
        <div className="flex flex-col my-10 w-1/2 justify-center">

            <div className="flex mb-2 items-center">
               <Circkle step={props.step} title={props.title} children={undefined}/>
                <h1 className="text-2xl">{props.title}</h1>
            </div>

            <div className="pl-40 text-left">
                {props.children}
            </div>
        </div> 
    );
}

export default AdCreatorStep