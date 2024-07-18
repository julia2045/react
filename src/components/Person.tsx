//criar uma função que retorna o dia atual
let getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-br',{weekday: 'long'}).format(new Date())
}
//criando props onde ele pega elementos do pai e herda para o filho
type Props ={
    name: string
    avatar: string
    filmes: string[]
    adress?: string //? siginifica que é opcional e não obrigatoria
}

export const Person = ({name,avatar,filmes}: Props) =>{
    
     
    return(
        <div className="font">
            <h1 style={{color: 'red',fontSize: '30px'}}>{name} - {getWeekDay()}</h1>
            <img src={avatar} alt={name} className="w-40"/>
            
            <ul>
                <li>{filmes[0]}</li>
                <li>{filmes[1]}</li>
                <li>{filmes[2]}</li>
            </ul>
        </div>
    )


// export const Person = (props: Props) =>{
    
     
//     return(
//         <div className="font">
//             <h1 style={{color: 'red',fontSize: '30px'}}>{props.name} - {getWeekDay()}</h1>
//             <img src={props.avatar} alt={props.name} className="w-40"/>
            
//             <ul>
//                 <li>{props.filmes[0]}</li>
//                 <li>{props.filmes[1]}</li>
//                 <li>{props.filmes[2]}</li>
//             </ul>
//         </div>
//     )
    // const name: string = 'Will Smith'
    // const avatar: string = "https://cinepop.com.br/wp-content/uploads/2022/04/will-smith-chris-rock-oscar-1.jpg" 
    // return(
    //     <div className="font">
    //         <h1 style={{color: 'red',fontSize: '30px'}}>{name} - {getWeekDay()}</h1>
    //         <img src={avatar} alt={name} className="w-40"/>
            
    //         <ul>
    //             <li>Um Maluco no Pedaço</li>
    //             <li>MIB</li>
    //             <li>Eu Sou A Lenda</li>
    //         </ul>
    //     </div>
    // )
}