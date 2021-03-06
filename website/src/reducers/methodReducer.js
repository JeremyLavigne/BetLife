// 'method' variable represent the method user are currently creating or modifting
//---------------------------------------------------------------------------------

const initialState = null

export const backToNull = () => {
    return { type: 'NULL'}
}

export const modifyExisting = (method) => {
    return { type: 'MODIFY_EXISTING', data: method}
}

export const setId = (id) => {
    return { type: 'SET_ID', data: { id: id } }
}

export const setDate = (date) => {
    return { type: 'SET_DATE', data: { date: date } }
}

export const setChampionship = (championship) => {
    return { type: 'SET_CHAMPIONSHIP', data: { championship: championship } }
}

export const setName = (name) => {
    return { type: 'SET_NAME', data: { name: name } }
}

export const setBetHowMany = (betHowMany) => {
    return { type: 'SET_HOW_MANY', data: { betHowMany: betHowMany } }
}

export const setCurrency = (currency) => {
    return { type: 'SET_CURRENCY', data: { currency: currency } }
}

export const setBetOnWho = (betOnWho) => {
    return { type: 'SET_BET_ON_WHO', data: { betOnWho: betOnWho } }
}

export const setPlayingWhere = (playingWhere) => {
    return { type: 'SET_PLAYING_WHERE', data: { playingWhere: playingWhere } }
}

export const setAgainstWho = (againstWho) => {
    return { type: 'SET_AGAINST_WHO', data: { againstWho: againstWho } }
}

export const initConditions = (id) => {
    return { type: 'INIT_CONDITIONS', data: { id: id}  }
}

export const addCondition = (id) => {
    return { type: 'ADD_CONDITION', data: { id: id} }
}

export const deleteCondition = (index) => {
    return { type: 'DELETE_CONDITION', data: { index: index } }
}

export const setConditionOnWhat = (conditionOnWhat, index) => {
    return { type: 'SET_CONDITION_ON_WHAT', data: { conditionOnWhat: conditionOnWhat, index: index } }
}

export const setConditionOnWho = (conditionOnWho, index) => {
    console.log(conditionOnWho, index)
    return { type: 'SET_CONDITION_ON_WHO', data: { conditionOnWho: conditionOnWho, index: index  } }
}

export const setConditionValue1 = (conditionValue1, index) => {
    return { type: 'SET_CONDITION_VALUE1', data: { conditionValue1: conditionValue1, index: index  } }
}

export const setConditionValue2 = (conditionValue2, index) => {
    return { type: 'SET_CONDITION_VALUE2', data: { conditionValue2: conditionValue2, index: index  } }
}



//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

const methodReducer = (state = initialState, action) => {
    //console.log('state now: ', state)
    //console.log('action', action)
    const newMethod = { ...state }

    switch (action.type) {
        case 'NULL' :
            return null

        case 'SET_ID' :
            newMethod.id = action.data.id
            return newMethod

        case 'SET_DATE' :
            newMethod.date = action.data.date
            return newMethod

        case 'MODIFY_EXISTING' :
            return action.data

        case 'SET_CHAMPIONSHIP' :
            newMethod.championship = (action.data.championship === "Championship" ? null : action.data.championship)
            return newMethod

        case 'SET_NAME' :
            newMethod.name = (action.data.name === "" ? null : action.data.name)
            return newMethod

        case 'SET_HOW_MANY' :
            newMethod.betHowMany = action.data.betHowMany
            return newMethod

        case 'SET_CURRENCY' :
            newMethod.currency = action.data.currency
            return newMethod

        case 'SET_BET_ON_WHO' :
            newMethod.betOnWho = (action.data.betOnWho === "Bet On Who?" ? null : action.data.betOnWho)
            return newMethod

        case 'SET_PLAYING_WHERE' :
            newMethod.playingWhere = (action.data.playingWhere === "Where ?" ? null : action.data.playingWhere)
            return newMethod

        case 'SET_AGAINST_WHO' :
            newMethod.againstWho = (action.data.againstWho === "Against Who?" ? null : action.data.againstWho)
            return newMethod

        case 'INIT_CONDITIONS' :
            newMethod.conditions = [{ id: action.data.id, onWhat: "", onWho: "", value1: "", value2: "" }]
            return newMethod

        case 'ADD_CONDITION' :
            newMethod.conditions.push({ id: action.data.id, onWhat: "", onWho: "", value1: "", value2: "" })
            return newMethod
            
        case 'DELETE_CONDITION' :
            newMethod.conditions.splice(action.data.index,1 )
            return newMethod
                
        case 'SET_CONDITION_ON_WHAT' :
            newMethod.conditions[action.data.index].onWhat = (action.data.conditionOnWhat === "About .." ? null : action.data.conditionOnWhat)
            return newMethod

        case 'SET_CONDITION_ON_WHO' :
            newMethod.conditions[action.data.index].onWho = (action.data.conditionOnWho === "On .." ? null : action.data.conditionOnWho)
            return newMethod

        case 'SET_CONDITION_VALUE1' :
            newMethod.conditions[action.data.index].value1 = (action.data.conditionValue1  === "On .." ? null : action.data.conditionValue1)
            return newMethod

        case 'SET_CONDITION_VALUE2' :
            newMethod.conditions[action.data.index].value2 = (action.data.conditionValue2 === "" ? null : action.data.conditionValue2)
            return newMethod

      default: return state
    }
}
  
export default methodReducer