import { General } from './general';
import { ActivityLinks } from './activity_link';
import { Gis } from './gis';
import { MessageQueue } from './message_queue';
import { Search } from './search';
import { Query } from './query';
import { Request } from './request';
import { Inspection } from './inspection';
import { WorkOrder } from './workorder';
import { Briefcase } from './briefcase';
interface Citywork {
}
/**
 * Core class Cityworks with most of the authentication and install capabilities functions
 */
declare class Cityworks implements Citywork {
    /**
     * The domain of the cityworks install. Defaults to Cityworks Online
     */
    private base_url;
    /**
     * Stores the currently in use authentication token
     */
    private Token?;
    /**
     * Stores the login username
     */
    private login?;
    /**
     * Holds the login password
     */
    private password?;
    /**
     * Holds the GIS Token for GIS-based Authentication (Portal)
     */
    private gisToken?;
    /**
     * Holds the GIS Token URL for GIS-based Authentication (Portal)
     */
    private gisTokenUrl?;
    /**
     * Stores settings including path (defaults to "cityworks"), secure (defaults to true), expires (defaults to null - does not expire), default_domain
     */
    private settings;
    error?: any;
    private extensions;
    private features;
    private potential_loads;
    /**
       * Contructor for a new cityworks instance's object, allows one to optionally configure the domain and other settings right from the get-go
       * @param {string} [base_url] - The base url of your Cityworks instance
       * @param {object} [settings] - The settings for your Cityworks site. Full list: {path: (defaults to "cityworks"), secure: defaults to true, expires: defaults to NULL, does not expire, default_domain: defaults to NULL, uses default user domain, version: defaults to 23, for 15.x set to 15}
       * @param {array} [load] - allows user to choose which modules to load and make available. Full availability array: ['general', 'activity_link', 'message_queue', 'gis', 'workorder', 'inspection', 'request', 'case']
       */
    constructor(base_url?: string, settings?: Object, load?: Array<string>);
    /**
       * Configure a new cityworks instance's domain and other settings
       *
       * @param {string} [base_url] - The first color, in hexadecimal format.
       * @param {object} [settings] - The second color, in hexadecimal format.
       * @param {array} [load] - allows user to choose which modules to load and make available. Full availability array: ['general', 'activity_link', 'message_queue', 'gis', 'search', 'workorder', 'inspection', 'request', 'case']
       * @return {boolean} Returns true if successful, otherwise, throws error
       */
    configure(base_url?: string, settings?: Object, load?: Array<string>): void;
    /**
       * Send a request to the Cityworks API
       *
       * If one ever needs to access or call an unimplemented API endpoint of a Cityworks install, one can call this method directly with the path and data payload:
       *
       * `cityworks.runRequest(service_path, post_data)`
       *
       * @param {string} service_path - The path to the particular endpoint
       * @param {any} post_data - The data object to be sent to the Cityworks API
       * @param {string} post_file - The path of the file to send to the Cityworks API
       * @return {Object} Returns Promise object that represents the json object returned from the Cityworks API
       */
    runRequest(service_path: string, post_data?: any, post_file?: string): Promise<unknown>;
    /**
       * Authenticate with the Cityworks API and store an access token for use. Stores the token on cityworks.Token.
       * @param {string} login - User's login name
       * @param {password} password - User's password
       * @return {Object} Returns Promise object that represents a boolean which tells you the login succeeded (true) or failed (false).
       */
    authenticate(login: string, password: string): Promise<unknown>;
    /**
       * Authenticate a username with a GIS Token
       * @param {login} - Gis user name, should match a Cityworks employee login name
       * @param {string} gisToken - Gis Oauth2 access token
       * @param {string} gisTokenUrl - Base url to GIS server (not the '/generateToken' endpoint)
       * @param {number} [expires] - Authenticate to Cityworks for a specified number of milliseconds, defaults to 2 weeks
       */
    authenticateWithGISToken(login: string, gisToken: string, gisTokenUrl: string, expires?: number): Promise<unknown>;
    /**
       * Validate provided token
       * @param {string} token - User's login name
       * @param {boolean} [set] - Set a valid token as the cityworks instance's active token
       * @return {Object} Returns Promise object that represents a boolean which apprises one of the token's validity and that is was set (true) or throws an error if was not valid (and not set).
       */
    validateToken(token: string, set?: boolean): Promise<unknown>;
    /**
       * Set a token you've retrieved from your storage system as the active token for the cityworks instance. Note that this doesn't check the token for validity.
       * @param {token} token - The token string to set as the active token.
       * @return {boolean} Returns a boolean which apprises one that the token was set (true) or not set (false).
       */
    setToken(token: any): boolean;
    /**
       * Get currently set, valid token
       * @param {token} token - The token string to set as the active token.
       * @return {string} Returns a string which is the currently-set token or the boolean false value if no (valid) token set
       */
    getToken(): string | false;
    /**
       * Revoke all current user's tokens or only tokens created before a particular date and time.
       * @param {number} [revokeBefore] - Datetime as an Epoch integer (number), if you wish to revoke only tokens created before a particular datetime
       * @return {Object} Returns Promise object that represents a boolean which apprises one of the revocation outcome's success (true) or failure (false)
       */
    revokeToken(revokeBefore?: number): Promise<unknown>;
    /**
       * Get the localization settings for current Cityworks install
       * @return {Object} Returns Promise object that represents an Object which contains all the localization settings for the current Cityworks install
       */
    getLocalizationSettings(): Promise<unknown>;
    /**
       * Get the system timezone options for current Cityworks install
       * @return {Object} Returns Promise object that represents an Object which contains all the timezone settings for the currentCityworks install
       */
    getTimezoneOptions(): Promise<unknown>;
    /**
       * Get the current install's location information
       * @return {Object} Returns Promise object that represents an Object which contains the location information
       */
    getCurrentLocation(): Promise<unknown>;
    /**
       * Check if a particular license is available to the currently-authenticated user
       * @param {string} area - Area of access
       * @param {string} service - Service to access
       * @return {boolean} Returns Promise object that represents a boolean which informs access is granted (true) or denied (false)
       */
    licensedApiCheck(area: string, service: string): Promise<unknown>;
    /**
       * Check if a current Cityworks install is licensed to use a particular extension
       *
       * Possible extensions currently include: "UnknownExtension", "CwAnalytics", "WebHooks", "PLLPublicApp", "ActivityUpdate", "SingleSignOn"
       *
       * @param {string} extension - Extension name
       * @return {boolean} Returns Promise object that represents a boolean which informs extension is licensed (true) or not (false)
       */
    licensedExtensionCheck(extension: string): Promise<unknown>;
    /**
       * Check a whole list to see if current Cityworks install is licensed to use extensions
       *
       * Possible extensions currently include: "UnknownExtension", "CwAnalytics", "WebHooks", "PLLPublicApp", "ActivityUpdate", "SingleSignOn"
       *
       * @param {Array<string>} extension - Extension names
       * @return {Object} Returns Promise object that represents a boolean which informs extension is licensed (true) or not (false)
       */
    licensedExtensionsCheck(extensions: Array<string>): Promise<unknown>;
    /**
       * Check if current user is licensed to use a feature:
       *
       * "UnknownFeature", "ViewInspections", "EditInspections", "ViewServiceRequest", "EditServiceRequest", "ViewWorkOrder", "EditWorkOrder", "EquipmentCheckOut", "OfficeField", "Respond", "Eurl", "PaverInterface", "Contracts", "Storeroom", "PLL", "Cw4XL", "TableEditor", "CCTVInterface", "MobileAndroid", "MobileiOS", "PerformanceBudgeting", "Insights", "RespondCase", "RespondInspection", "RespondServiceRequest", "RespondTaskManager", "RespondWorkOrder", "Workload", "OpX", "TrimbleUnityMobile", "TrimbleVegetationManager"
       *
       * @param {string} [feature] - Feature to check to see if ciurrently authenticated user can utilize
       * @return {Object} Returns Promise object that represents a boolean which communicates license state as licensed (true) or not (false)
       */
    licensedFeatureCheck(feature: string): Promise<unknown>;
    /**
       * Check if current user is licensed to use features:
       *
       * "UnknownFeature", "ViewInspections", "EditInspections", "ViewServiceRequest", "EditServiceRequest", "ViewWorkOrder", "EditWorkOrder", "EquipmentCheckOut", "OfficeField", "Respond", "Eurl", "PaverInterface", "Contracts", "Storeroom", "PLL", "Cw4XL", "TableEditor", "CCTVInterface", "MobileAndroid", "MobileiOS", "PerformanceBudgeting", "Insights", "RespondCase", "RespondInspection", "RespondServiceRequest", "RespondTaskManager", "RespondWorkOrder", "Workload", "OpX", "TrimbleUnityMobile", "TrimbleVegetationManager"
       *
       * @param {Array<string>} [feature] - Features to check to see if currently authenticated user can utilize
       * @return {Object} Returns Promise object that represents a boolean which communicates license state as licensed (true) or not (false)
       */
    licensedFeaturesCheck(features: Array<string>): Promise<unknown>;
    /**
       * Check if current user is licensed to use services. List req ServicesList of 'Area/Service', i.e.:
       *
       * ['AMS/Inspection','AMS/WorkOrder','PLL/Case']
       *
       * @param {Array<string>} [services] - Services to check to see if currently authenticated user can utilize
       * @return {Object} Returns Promise object that represents a boolean which communicates license state as licensed (true) or not (false)
       */
    licensedServicesCheck(services: Array<string>): Promise<unknown>;
    /**
       * Get a list of CityworksOnline sites for this user
       *
       * @param {string} [login] - Login Name to use when checking. Defaults to previously-stored login name.
       * @param {string} [password] - Password to use when checking. Defaults to previously-stored password.
       * @return {Object} Returns Promise object that represents an array of cityworks online sites available to this user.
       */
    cityworksOnlineSites(login?: string, password?: string): Promise<unknown>;
    /**
       * Get a list of Domains (not tld, but organizations) in the currently-connected Cityworks install
       *
       * @return {Object} Returns Promise object that represents a collection of the configured domains.
       */
    domains(): Promise<unknown>;
    /**
       * Get a list of Domains (not tld, but organizations) in the currently-connected Cityworks install
       *
       * @param {string} [login] - Optional login name to get user information for. Defaults to currently-set user name used for login.
       * @return {Object} Returns Promise object that represents an Object with the user information
       */
    user(login?: string): Promise<unknown>;
    /**
       * Get the software version number of the currently-connected Cityworks install
       *
       * @return {Object} Returns Promise object that represents a string of the version number
       */
    version(): Promise<unknown>;
}
declare const cw: Cityworks;
declare const general: General;
declare const activity_link: ActivityLinks;
declare const message_queue: MessageQueue;
declare const search: Search;
declare const query: Query;
declare const gis: Gis;
declare const request: Request;
declare const inspection: Inspection;
declare const workorder: WorkOrder;
declare const briefcase: Briefcase;
export { cw as Cityworks, general, activity_link, message_queue, search, query, gis, request, inspection, workorder, briefcase };
