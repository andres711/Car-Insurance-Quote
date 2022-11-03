export const algorithmQuoteYear = (year)=>{
    const date = new Date()
    //per year the base decrement 3%
    const diference = date.getFullYear() - year
    
    
    return diference
}

export const algorithmQuoteMarca = (marca)=>{
    let increment
    if(marca ==="asiatico"){
        increment= 1.2
    }
    else if(marca ==="americano"){
        increment= 1.3
    }
    else if(marca ==="europeo"){
        increment= 1.4
    }
    return increment
}

export const algorithmQuotePlan = (plan)=>{
    let increment
    if(plan ==="complete"){
        increment = 1.4
    }
    else if(plan ==="basic"){
        increment = 1
    }
    return increment
}

