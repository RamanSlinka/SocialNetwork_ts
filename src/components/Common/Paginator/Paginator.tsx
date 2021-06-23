import React from "react";
import styles from "./Paginator.module.css";



type OnPageChangedType = {

    pageSize: number
    // totalUsersCount: number
    currentPage: number
   totalCount: number
    onPageChanged: (page: number) => void


}

let Paginator = (props: OnPageChangedType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            {pages.map(p => {
                return <span

                    className={props.currentPage === p ? styles.selectedPage : ""}
                    onClick={(e) => {

                        props.onPageChanged(p)
                    }}
                > {p} </span>
            })}
        </div>
    )
}
export default Paginator;