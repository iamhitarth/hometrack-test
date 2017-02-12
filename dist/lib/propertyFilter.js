'use strict';

exports.getFiltered = function (properties, forType, forWorkflow) {

    return properties.reduce(function (filtered, property) {

        if (property.type == forType && property.workflow == forWorkflow) {
            var add = property.address;
            property = {
                'concataddress': add.buildingNumber + ' ' + add.street + ' ' + add.suburb + ' ' + add.state + ' ' + add.postcode,
                'type': forType,
                'workflow': forWorkflow
            };

            filtered.push(property);
        }

        return filtered;
    }, []);
};
//# sourceMappingURL=propertyFilter.js.map