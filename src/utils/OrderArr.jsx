export const handleDesc=(str, filterData)=>{
    if(str==='PLANET NAME') str='planet_name'
    if(str==='HOST NAME') str="host_name"
    if(str==='DISCOVERY METHOD') str="discovery_method"
    if(str==='DISCOVERY YEAR') str="discovery_year"
    if(str==='DISCOVERY FACILITY') str="discovery_facility"

    const results= filterData.reverse()
    console.log(results, "desc");
    return results
  }
  export const handleAsc=(str, filterData)=>{
    if(str==='PLANET NAME') str='planet_name'
    if(str==='HOST NAME') str="host_name"
    if(str==='DISCOVERY METHOD') str="discovery_method"
    if(str==='DISCOVERY YEAR') str="discovery_year"
    if(str==='DISCOVERY FACILITY') str="discovery_facility"
  
    const results= filterData.reverse()
    console.log(results);
    return results
  }