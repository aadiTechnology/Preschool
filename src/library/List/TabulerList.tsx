import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import TabulerCard from '../Card/TabulerCard'

function TabulerList({ ItemList, clickEdit, Submit, Delete }) {
    return (
        <div>
            {ItemList.length == 0 ? <ErrorMessage error={'No records found'} /> :
                <>
                    {ItemList.map((Item, i) => {
                        return (
                            <div key={i}>
                                <TabulerCard item={Item} clickEdit={clickEdit} Submit={Submit} Delete={Delete} />
                            </div>
                        )
                    })}

                </>
            }
        </div>
    )
}

export default TabulerList