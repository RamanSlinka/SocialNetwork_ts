import React, {useState} from "react";
import { Pagination } from 'antd';
import styles from "./Paginator.module.css";
import cn from "classnames"


type OnPageChangedType1 = {

    pageSize: number
    currentPage: number
    totalItemsCount: number
    onPageChanged: (page: number) => void
    // portionSize: number

}

let Paginator: React.FC<OnPageChangedType1> = ({
                                                   totalItemsCount,
                                                   pageSize,
                                                   currentPage,
                                                   onPageChanged,
                                               }) => {
    let portionSize = 20
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // let portionCount = Math.ceil(pagesCount / portionSize);
    // let [portionNumber, setPortionNumber] = useState(1);
    // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div >
            <Pagination defaultCurrent={1}
                        defaultPageSize={pageSize}
                        onChange={onPageChanged}
                        current={currentPage}
                        total={totalItemsCount}
                        showQuickJumper={true}
                        showSizeChanger={false}
                      />
        </div>

        // <div className={styles.paginator}>
        //     {portionNumber > 1 &&
        //     <button onClick={() => {
        //         setPortionNumber(portionNumber - 1)
        //     }}>PREV</button>}
        //
        //     {pages
        //         .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        //         .map((p) => {
        //
        //             // add "import cn from 'classnames'"
        //
        //             return <span className={cn({
        //                 [styles.selectedPage]: currentPage === p
        //             }, styles.pageNumber)}
        //                          key={p}
        //                          onClick={(e) => {
        //                              onPageChanged(p);
        //                          }}>{p}</span>
        //         })}
        //     {portionCount > portionNumber &&
        //     <button onClick={() => {
        //         setPortionNumber(portionNumber + 1)
        //     }}>NEXT</button>
        //     }
        //
        // </div>

    )
}
export default Paginator;