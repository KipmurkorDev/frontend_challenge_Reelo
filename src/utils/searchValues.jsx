


export const uniqueValues=(arr)=>{
    let planetValues= new Set([]);
    let hostNameVlaue=new Set([]);
    let discoveryMethod = new Set([]);
    let discoveryYear= new Set([]);
    let discoveryFacility= new Set([]);
    for(let i=0; i<500; i++){
        planetValues.add(arr[i]?.planet_name)
        hostNameVlaue.add(arr[i]?.host_name)
        discoveryMethod.add(arr[i]?.discovery_method)
        discoveryYear.add(arr[i]?.discovery_year)
        discoveryFacility.add(arr[i]?.discovery_facility)
    }
return {planet:Array.from(planetValues), hostName:Array.from(hostNameVlaue), method:Array.from(discoveryMethod), year:Array.from(discoveryYear), facility:Array.from(discoveryFacility) }
}

export const filterData=(filter, data)=>{
let newData=data
const results=newData.filter((el)=>{
    return el.host_name===filter.host_name||el.discovery_method===filter.discovery_method||el.discovery_year===filter.discoveryYear||el.discovery_facility===filter.discovery_facility
})
return results
}