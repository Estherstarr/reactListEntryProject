import ItemList from './ItemList'


const Content = ({items, handleCheck, handleDelete}) => {
    
 

    return (
        <main>
                {items.length ? (
                    
                    <ItemList 
                    items={items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                    />
                ) :(
                    <p style = {{marginTop:'2rem'}}>Your list is empty.</p>
                )}
        </main>
    )
}

export default Content























/*const handleNameChange = () => {
    const names = ['Bob', 'James','Luke'];
    const int = Math.floor(Math.random()*3);
    setName(names[int])



    <button onClick={handleNameChange}>Change Name</button>
            <button onClick={() =>handleClick2('Dave')}>Click It</button>
            <button onClick={(e) =>handleClick3(e)}>Click It</button>
}*/