let restaurants

export default class restaurantDAO{
    static async injectDB(conn) {
        if (restaurants){
            return
        }
        try{
            restaurants=await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        }catch(e) { 
            console.error(`unable to estabhlish a collection: ${e}`);

        }
    }
    
    static async getRestaurants ({
        
    })
    
}