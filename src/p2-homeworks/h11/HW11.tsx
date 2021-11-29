import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(100)

    const changeValue = (value1: number) => {
        setValue1(value1)
    }


    return (


        <div  style={{backgroundColor: "#ededa6", fontFamily: "cursive"}}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={changeValue}
                    value={value1}
                />
            </div>

          {/*  <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>*/}


        </div>
    )
}

export default HW11
