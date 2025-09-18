export const renderPage = (currentPage) => {
    return async (req, res) => {
        try{
            res.render(currentPage, { currentPage: currentPage })
        }catch (err){
            console.log(err.message);
        }
    };
}

export const getPUUID = () => {
    return async (res, req) => {
        try{
            const { gameName, tagline } = req.body;
            const puuid = await getSummonerPUUID(gameName, tagline);
            res.render("stat", { currentPage: "stat", puuid });
        }catch (err){
            res.render("stat", { currentPage: "stat", puuid: "Error fetching PUUID" });
            console.log(err.message);
        }
    }
}