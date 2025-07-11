import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()


    // Set (como um array mas não aceita valores duplicados) e Map(como um objeto em js mas com particularidades) 

    list(video) {
        return this.#videos.values()
    }
    
    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}