import fs from 'fs'
import path from 'path'
import util from 'util'

/**
 * write some message to file
 * @param message message to write
 * @param fleName main file name of file
 * @param fileExtension file extension of the file
 * @param timeStamp add time stamp or not
 */
export function dumpToFileSync(message: any, fleName: string = 'dump', fileExtension: string = 'log', timeStamp: boolean = true) {
    let fullFileName
    if (timeStamp) {
        let timeString = new Date().toISOString().replace('-', '').replace('-', '').replace(':', '').replace(':', '')
        fullFileName = `${fleName}-${timeString}.${fileExtension}`
    } else {
        fullFileName = `${fleName}.${fileExtension}`
    }

    fs.writeFileSync(path.join(process.cwd(), fullFileName), util.format(message), { encoding: 'utf8' })
}

export default dumpToFileSync
