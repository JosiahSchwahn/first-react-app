

export default function Squre({value, onSquareClick}){

    // value stores the value and setValue is a function that can be used to change the value. 
    // The null passed to useState is used as the initial value for this state variable, so value 
    // here starts off equal to null.
    return(
        <button className="square" onClick={onSquareClick}>{value}</button>
    );

}