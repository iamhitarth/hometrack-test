exports.getFiltered = (properties, forType, forWorkflow) => {

    return properties.reduce((filtered, property) => {

        if(property.type == forType && property.workflow == forWorkflow){
            let add = property.address;
            property = {
                'concataddress': `${add.buildingNumber} ${add.street} ${add.suburb} ${add.state} ${add.postcode}`,
                'type': forType,
                'workflow': forWorkflow
            };

            filtered.push(property);
        }

        return filtered;
    }, []);

};