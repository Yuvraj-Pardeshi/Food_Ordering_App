import CategoryItemList from "./CategoryItemList";
const ResCategories = ({cdata, showItems, setshowIndex})=>{
    // console.log(cdata)
 
    const handleClick = ()=>{
        setshowIndex();
        // showItems = false
    }
    console.log(setshowIndex)
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-5 cursor-pointer">
                <div className="flex justify-between"  onClick={handleClick}>
                <span className="font-bold">{cdata.title} ({cdata.itemCards.length})</span>
                <span className="text-xl">🔽</span>
                </div>
            {/* {Accordion Body} */}
            <div className="text-left">
                {showItems && <CategoryItemList items={cdata.itemCards}/>}
            </div>
            </div>
        </div>
    )
}
export default ResCategories;