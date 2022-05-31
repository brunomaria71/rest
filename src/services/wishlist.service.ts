import { getDb } from "../gateway/mongo"

export const getWishListCOllection = async () => {
    const db = await getDb();
    return db.collection('wish-list')
}