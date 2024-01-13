export declare class Inspection {
    /**
     * @hidden
     */
    cw: any;
    /**
     * Inspection Administration methods
     */
    admin?: any;
    /**
     * Inspection Administration methods
     */
    attachments?: any;
    /**
     * Inspection Costing methods
     */
    costs: any;
    /**
     * @hidden
     */
    constructor(cw: any);
    /**
     * Create new inspection
     *
     * @category Inspections
     * @param {Object} insp_data - See /{subdirectory}/apidocs/#/data-type-infodataType=InspectionBase on your Cityworks instance
     * @return {Object} Returns Promise that represents an object describing the newly-created inspection
     */
    create(insp_data: Object): Promise<unknown>;
    /**
     * Create inspections from an array of entities
     *
     * @category Inspections
     * @param {Object} insp_data - See /{subdirectory}/apidocs/#/data-type-infodataType=InspectionBase on your Cityworks instance
     * @return {Object} Returns Promise that represents a collection of objects describing the newly-created inspections
     */
    createFromEntities(insp_data: Object): Promise<unknown>;
    /**
     * Create an inspection from a parent inspection (TODO: what parent!?)
     *
     * @category Inspections
     * @param {object} insp_data - See /{subdirectory}/apidocs/#/data-type-infodataType=InspectionBase on your Cityworks instance
     * @return {Object} Returns object that represents an object describing the newly-created inspection
     */
    createFromParent(insp_data: Object): Promise<unknown>;
    /**
     * Create an inspection from a service request
     *
     * @category Inspections
     * @param {object} insp_data - See /{subdirectory}/apidocs/#/data-type-infodataType=InspectionBase on your Cityworks instance
     * @return {Object} Returns object that represents an object describing the newly-created inspection
     */
    createFromServiceRequest(insp_data: Object): Promise<unknown>;
    /**
     * Create an inspection from a WorkOrder
     *
     * @category Inspections
     * @param {object} insp_data - See /{subdirectory}/apidocs/#/data-type-infodataType=InspectionBase on your Cityworks instance
     * @return {Object} Returns object that represents an object describing the newly-created inspection
     */
    createFromWorkOrder(insp_data: Object): Promise<unknown>;
    /**
     * Update an inspection
     *
     * @category Inspections
     * @param {object} insp_data - See /{subdirectory}/apidocs/#/data-type-infodataType=InspectionBase on the Cityworks instance
     * @return {Object} Returns Promise that represents an object describing the updated inspection
     */
    update(insp_data: Object): Promise<unknown>;
    /**
     * Get an inspection by ID
     *
     * @category Inspections
     * @param {number} inspectionId - The inspection ID to retrieve
     * @return {Object} Returns Promise that represents an object describing the inspection
     */
    getById(inspectionId: number): Promise<unknown>;
    /**
     * Get inspections by array of IDs
     *
     * @category Inspections
     * @param {Array<number>} inspectionIds - The inspection IDs to retrieve
     * @return {Object} Returns Promise that represents a collection of Objects describing the inspections
     */
    getByIds(inspectionIds: Array<number>): Promise<unknown>;
    /**
     * Cancel inspections
     *
     * @category Inspections
     * @param {Array<number>} inspectionIds - An array of the IDs to cancel the matched inspections
     * @param {string} [cancelReason] - A reason for cancelling the inspection(s)
     * @param {datetime} [dateCancelled] - The date/time that it should be indicated the inspection was cancelled
     * @return {Object} Returns object that represents a collection of inspections
     */
    cancel(inspectionIds: Array<number>, cancelReason?: string, dateCancelled?: Date): Promise<unknown>;
    /**
     * Uncancel inspections
     *
     * @category Requests
     * @param {Array<number>} inspectionIds - An array of the IDs to uncancel the matched requests
     * @return {Object} Returns object that represents a collection of requests
     */
    uncancel(inspectionIds: Array<number>): Promise<unknown>;
    /**
     * Close inspections
     *
     * @category Inspections
     * @param {Array<number>} inspectionIds - An array of the IDs to close the matched inspections
     * @return {Object} Returns object that represents a collection of inspections
     */
    close(inspectionIds: Array<number>): Promise<unknown>;
    /**
     * Reopen closed inspections
     *
     * @category Inspections
     * @param {Array<number>} inspectionIds - An array of the IDs to reopen the matched inspections
     * @return {Object} Returns object that represents a collection of inspections
     */
    reopen(inspectionIds: Array<number>): Promise<unknown>;
    /**
     * Delete inspections
     *
     * @category Inspections
     * @param {Array<number>} inspectionIds - An array of the IDs to delete the matched inspections
     * @return {Object} Returns object that represents a collection of inspection Ids which have been deleted
     */
    delete(inspectionIds: Array<number>): Promise<unknown>;
    /**
     * Search for inspections
     *
     * @category Inspection Search
     * @param {Object} searchData - The search information to retrieve matched inspections, see instance docs: /{subdirectory}/apidocs/#/service-info/Ams/Inspection
     * @return {Object} Returns Promise that represents an array of the matching inspection IDs
     */
    search(searchData: Object): Promise<unknown>;
    /**
     * Get the records on the basis of inspectionId, only populates InspectionId, InspTemplateName, and Location properties
     *
     * @category Inspection Object Search
     * @param {string} inspectionId - ???, see instance docs: /{subdirectory}/apidocs/#/service-info/Ams/Inspection
     * @return {Object} Returns Promise that represents a collection of the matching (limited) inspection objects
     */
    searchObject(inspectionId: string): Promise<unknown>;
    /**
     * Get list of statuses
     *
     * @category Inspection Options
     * @return {Object} Returns object that represents an array of all possible statuses for an Inspection
     */
    statuses(): Promise<unknown>;
    /**
     * Get inspection submit to list
     *
     * @category Inspection Options
     * @param {boolean} [includeInactiveEmployees] - whether to include inactive employees in the return. Defaults to false.
     * @param {boolean} [domainIds] - which domains to include in the return, default to All domains
     * @return {Object} Returns object that represents a collection of all possible employees for an Inspection's SubmitTo
     */
    submitTos(includeInactiveEmployees?: boolean, domainIds?: Array<number>): Promise<unknown>;
    /**
     * Add an entity to an existing inspection
     * This method requires an Entity/Asset to be specified. You can either specify the Entity Type and its UID or a WorkOrderEntityBase Object.
     *
     * @category Inspections
     * @param {Object} entity - Either of two attribute combinations are valid: entityType & entityUid OR Entity as a fully-inflated WorkOrderEntity (WorkOrderEntityBase) object.
     * @param {number} inspectionId - An Inspection ID to attach the entity/asset to.
     * @param {boolean} updateXY - Provide a boolean to whether the inspection's X/Y coordinates should be updated. Default is true.
     * @param {Object} facility - Add Facility_Id for the Facility Identifier and Level_id for the Facility Level Identifier. Defaults to empty so that no facility is specified.
     * @return {Object} Returns object that represents an object which describes an Inspection Entity
     */
    connectAsset(entity: {
        EntityType?: string;
        EntityUid?: string;
        Entity?: Object;
    }, inspectionId: number, updateXY?: boolean, facility?: {
        Facility_Id?: string;
        Level_Id?: string;
    }): Promise<unknown>;
    /**
     * Get the answers for inspections
     *
     * @category Inspections
     * @param {Array<number>} inspections - An Array of one or more Inspection IDs
     * @return {Object} Returns Promise that represents a collection of Inspection Answers
     */
    getAnswers(inspections: Array<number>): Promise<unknown>;
    /**
     * Get the audit log for a specific Inspection
     *
     * @category Inspections
     * @param {number} inspectionId - An Inspection ID to get the audit log for
     * @return {Object} Returns Promise that represents a collection of Cityworks Metadata Objects
     */
    getAuditLog(inspectionId: number): Promise<unknown>;
    /**
     * Create a search definition. Save the definition by setting SaveDefinition = true and supplying a SearchName.
     *
     * @category Inspections
     * @param {Object} searchData - Search data variables. See /{subdirectory}/apidocs/#/service-info/Ams/Inspection
     * @param {number} [searchName] - What to name your search (if it should be saved)
     * @param {number} [sharedWithin] - What group or domain to share the search to.
     * @param {boolean} saveDefinition - Whether or not to save the search definition. Defaults to true when a search name is specified.
     * @param {boolean} enableEurl - Whether or not to enable EURL for the saved search. Defaults to true.
     * @return {Object} Returns Promise that represents a collection of Cityworks Metadata Objects
     */
    createSearchDefinition(searchData: Object, searchName?: string, sharedWithin?: number, saveDefinition?: boolean, enableEurl?: boolean): Promise<unknown>;
    /**
     * Get cycle from
     *
     * @category Inspection Options
     * @return {Object} Returns Promise that represents ... I have no idea what this endpoint does
     */
    getCycleFrom(): Promise<unknown>;
    /**
     * Get cycle intervals
     *
     * @category Inspection Options
     * @return {Object} Returns Promise that represents a Dictionary of the cycle intervals available
     */
    getCycleIntervals(): Promise<unknown>;
    /**
     * Get cycle types
     *
     * @category Inspection Options
     * @return {Object} Returns Promise that represents a Dictionary of the cycle types available
     */
    getCycleTypes(): Promise<unknown>;
    /**
     * Get districts
     *
     * @category Inspection Options
     * @return {Object} Returns Promise that represents an Array of the districts
     */
    getDistricts(): Promise<unknown>;
    /**
     * Get Inspection Employee lists. Abstraction done here, though only one employee list field, AFAIK.
     *
     * @category Inspection Options
     * @param {string} listType - Which list (endpoint) to get. Includes only SubmitTos.
     * @param {boolean} includeInactiveEmployees - Whether to include inactive employees in the returned list. Defaults to false.
     * @param {Array<number>} [domainIds] - Filter to certain domains within the Cityworks instance.
     * @return {Object} Returns Promise that represents a collection of employees. See: /{subdirectory}/apidocs/#/data-type-info;dataType=EmployeeNameId
     */
    getEmployeeLists(listType: string, includeInactiveEmployees?: boolean, domainIds?: Array<number>): Promise<unknown>;
    /**
     * Get SubmitTo list
     *
     * @category WorkOrder Options
     * @param {boolean} includeInactiveEmployees - Whether to include inactive employees in the returned list. Defaults to false.
     * @param {Array<number>} [domainIds] - Filter to certain domains within the Cityworks instance.
     * @return {Object} Returns Promise that represents a collection of employees. See: /{subdirectory}/apidocs/#/data-type-info;dataType=EmployeeNameId
     */
    getSubmitTos(includeInactiveEmployees?: boolean, domainIds?: Array<number>): Promise<unknown>;
    /**
     * Move inspection by InspectionId. Must provide well known id (WKID) or well known text (WKT)
     *
     * @category Inspections
     * @param {number} inspectionId - The ID of the inspection that should be moved
     * @param {number} x - The X coordinate for the move
     * @param {number} y - The Y coordinate for the move
     * @param {Object} projection - Should include at least WKT _or_ WKID attribute. Can also include VcsWKID attribute.
     * @param {number} [z] - the optional Z coordinate for the move
     * @return {Object} Returns Promise that represents an object describing the updated GISPoint
     */
    move(inspectionId: number, x: number, y: number, projection: {
        WKID?: string;
        WKT?: string;
        VcsWKID?: string;
    }, z?: number): Promise<unknown>;
    /**
     * Get inspection templates
     *
     * @category Inspection Templates
     * @param {Array<string>} [entityTypes] - The Entity Type(s) to return potential inspections for
     * @param {boolean} [canCreate] - If true, only return templates the user can create, ignored if false or null, default is true
     * @param {Object} [options] - An object which can include: [IncludeInactive]: boolean, MaximumDateModified: Date, MinimumDateModified: Date, TemplateIds: Array<number>
     * @return {Object} Returns Promise that represents a collection of all Inspections matching the provided parameters
     */
    getTemplates(entityTypes?: Array<string>, canCreate?: boolean, options?: {
        IncludeInactive?: boolean;
        MaximumDateModified?: Date;
        MinimumDateModified?: Date;
        TemplateIds?: Array<number>;
    }): Promise<unknown>;
    /**
     * Get a list of templates by IDs
     *
     * @category Inspection Templates
     * @param {Array<number>} inspectionIds - An array of the IDs to retrieve the matched inspections
     * @param {Object} [options] - An object which can include: [IncludeInactive]: boolean, MaximumDateModified: Date, MinimumDateModified: Date, TemplateIds: Array<number>
     * @return {Object} Returns object that represents an object describing the inspection
     */
    getTemplatesByIds(inspTemplateIds: Array<number>, options?: {
        MaximumDateModified?: Date;
        MinimumDateModified?: Date;
    }): Promise<unknown>;
    /**
     * Get entity types for inspection template(s)
     *
     * @category Inspection Templates
     * @param {Array<number>} inspTemplateIds - An array of the IDs to reopen the matched inspections
     * @return {Object} Returns object that represents an array of Entity Types
     */
    getTemplateEntityTypes(inspTemplateIds: Array<number>): Promise<unknown>;
    /**
    * Get the questions and answers for inspection template(s)
    *
    * @category Inspection Templates
    * @param {Array<number>} inspTemplateIds - An array of the IDs to reopen the matched inspections
    * @return {Object} Returns object that represents an array which contains a list of InspQuestionPanel for the template
    */
    getQA(inspTemplateIds: Array<number>): Promise<unknown>;
    /**
     * Get inspection template question conditions
     *
     * @category Inspection Templates
     * @param {Array<number>} inspTemplateIds - An array of template IDs to get the matched inspection template Question conditions for
     * @return {Object} Returns object that represents an array which contains a dictionary of InspQuestion IDs to configs
     */
    getQConditions(inspTemplateIds: Array<number>): Promise<unknown>;
    /**
     * Get Map Layer Fields
     *
     * @category Inspections
     * @param {number} requestId - The inspection ID to get the map layer fields for.
     * @return {Object} Returns Promise that represents a collection of Objects describing the inspections
     */
    getMLFs(requestId: number): Promise<unknown>;
    /**
     * Update Map Layer Fields
     *
     * @category Inspections
     * @param {number} requestId - The inspection ID to get the map layer fields for.
     * @param {number} x
     * @param {number} y
     * @param {number} domainId - Domain ID
     * @param {number} [z] - Optional Z coordinate
     * @return {Object} Returns Promise that represents a ...
     */
    updateMLFs(requestId: number, x?: number, y?: number, domainId?: number, z?: number): Promise<unknown>;
    /**
     * Delete Map Layer Fields
     *
     * @category Inspections
     * @param {number} inspectionId - The inspection ID to delete the map layer fields for.
     * @return {Object} Returns Promise that represents a collection of Objects describing the workorders
     */
    deleteMLFs(inspectionId: number): Promise<unknown>;
}
