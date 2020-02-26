import fs from 'fs'
import path from 'path'
import util from 'util'

/**
 * Write message to file
 * 
 *     import dumpToFileSync from '@xud6/dump-to-file-sync'
 *     dumpToFileSync('message','crash-report');
 * 
 */

export type fileTimeStampFormat = "day" | "timestamp" | false | ""

/**
 * write some message to file
 * @param message message to write
 * @param fleName main file name of file
 * @param fileExtension file extension of the file
 * @param timeStamp add time stamp or not
 */
export function dumpToFileSync(message: any, fleName: string = 'dump', messageTimeStamp: boolean = true, fileTimeStampFormat: fileTimeStampFormat = "day", fileExtension: string = 'log') {
    let fullFileName
    let date = new Date()
    let dateISOString = date.toISOString();
    let dateLocalString = date.toLocaleDateString(undefined, {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
        timeZoneName: "short"
    })
    if (fileTimeStampFormat === "day") {
        fullFileName = `${fleName}-${dateLocalString.slice(0, 10)}.${fileExtension}`
    } else if (fileTimeStampFormat === "timestamp") {
        fullFileName = `${fleName}-${dateLocalString.replace('-', '').replace('-', '').replace(':', '').replace(':', '')}.${fileExtension}`
    } else {
        fullFileName = `${fleName}.${fileExtension}`
    }
    if (messageTimeStamp) {
        fs.appendFileSync(path.join(process.cwd(), fullFileName), `\n===${dateLocalString}===${dateISOString}===\n`, { encoding: 'utf8' })
    }
    fs.appendFileSync(path.join(process.cwd(), fullFileName), util.format(message), { encoding: 'utf8' })
}

export default dumpToFileSync
