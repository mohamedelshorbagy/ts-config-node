export function errorJSON(res: any , err: string) {
    res.status(500).json({
        success: true,
        message: err
    })
}

