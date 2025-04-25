/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface RelationApplicationDto {
    applicationSource: string;
    applicationTarget: string;
    /** @example "is_part_of" */
    type: "is_part_of" | "in_replacement_of" | "is_service_user_of" | "is_data_user_of";
}

export interface CreateLabelDto {
    /**
     * Source of the label
     * @example "https://referentiel-applications.interieur.rie.gouv.fr/applications"
     */
    source: string | null;
    /**
     * Value of the label
     * @example "My Application"
     */
    value: string | null;
    /**
     * ShortName of the label
     * @example "short-app-name"
     */
    shortname: string | null;
}

export interface CreateComplianceDto {
    /** Type of compliance (e.g., regulation, policy) */
    type: "regulation" | "standard" | "policy" | "contractual" | "security" | "privacy";
    /**
     * Name of the compliance
     * @example "GDPR"
     */
    name: string | null;
    /** Compliance status (e.g., compliant, non_compliant) */
    status: "compliant" | "non_compliant" | "partially_compliant" | "not_concerned";
    /**
     * Start date of validity
     * @example "2023-01-01"
     */
    validityStart?: string | null;
    /**
     * End date of validity
     * @example "2025-01-01"
     */
    validityEnd?: string | null;
    /**
     * Score value (if applicable)
     * @example "85"
     */
    scoreValue?: string | null;
    /**
     * Score unit (if applicable)
     * @example "%"
     */
    scoreUnit?: string | null;
    /**
     * Additional notes
     * @example "Notes about the compliance"
     */
    notes?: string | null;
}

export interface CreateApplicationDto {
    /**
     * Label of the application
     * @example "My Application"
     */
    label: string;
    /**
     * Metadata ID
     * @example "metadata456"
     */
    metadataId?: string;
    /**
     * Short name of the application
     * @example "short-app-name"
     */
    shortName?: string;
    /**
     * Logo URL of the application
     * @example "http://example.com/logo.png"
     */
    logo?: string;
    /**
     * Description of the application
     * @example "An amazing application"
     */
    description: string;
    /**
     * population associated with the application
     * @example ["population 1","population 2"]
     */
    targetPopulations?: string[];
    priorityRestart?: "p0" | "p1" | "p2" | "p3" | "p4" | "p5";
    /**
     * Purposes of the application
     * @example ["finance","HR"]
     */
    purposes?: string[];
    /**
     * Tags associated with the application
     * @example ["tag1","tag2"]
     */
    tags?: string[];
    /**
     * Parent application ID
     * @example "parentApp123"
     */
    parentId?: string;
    /**
     * Liste des labels alternatifs associés à l’application
     * @example [{"source":"https://referentiel-applications.interieur.rie.gouv.fr/applications","value":"My App","shortname":"short-name","metadataId":"metadata456"}]
     */
    labels: CreateLabelDto[];
    /**
     * Liste des conformités associées à l’application
     * @example [{"type":"security","name":"ISO 27001","status":"compliant","validityStart":"2024-01-01T00:00:00.000Z","validityEnd":"2026-12-31T23:59:59.000Z","scoreValue":"95","scoreUnit":"%","notes":"Fully compliant with security standards."}]
     */
    compliances: CreateComplianceDto[];
}

export interface GetApplicationDto {
    id: string;
    label: string;
    shortName: string | null;
    logo: string;
    description: string;
    purposes: string[];
    tags: string[];
}

export interface UpdateComplianceDto {
    type?: "regulation" | "standard" | "policy" | "contractual" | "security" | "privacy";
    /** @example "Regulation" */
    name?: string | null;
    status?: "compliant" | "non_compliant" | "partially_compliant" | "not_concerned";
    /** @example "2023-01-01" */
    validityStart?: string | null;
    /** @example "2029-12-31" */
    validityEnd?: string | null;
    /** @example "42" */
    scoreValue?: string | null;
    /** @example "%" */
    scoreUnit?: string | null;
    /** @example "Renseignements sur la conformité" */
    notes?: string | null;
}

export interface PatchApplicationDto {
    /**
     * Label of the application
     * @example "My Application"
     */
    label: string;
    /**
     * Metadata ID
     * @example "metadata456"
     */
    metadataId?: string;
    /**
     * Short name of the application
     * @example "short-app-name"
     */
    shortName?: string;
    /**
     * Logo URL of the application
     * @example "http://example.com/logo.png"
     */
    logo?: string;
    /**
     * Description of the application
     * @example "An amazing application"
     */
    description: string;
    /**
     * Purposes of the application
     * @example ["finance","HR"]
     */
    purposes?: string[];
    priorityRestart?: "p0" | "p1" | "p2" | "p3" | "p4" | "p5";
    /**
     * Tags associated with the application
     * @example ["tag1","tag2"]
     */
    tags?: string[];
    /**
     * Parent application ID
     * @example "parentApp123"
     */
    parentId?: string;
    compliances?: UpdateComplianceDto[];
    targetPopulations?: string[];
}

export type Label = object;

export interface CreateHostingDto {
    provider?: string;
    label?: string;
    region?: string;
    site?: string;
    nature: "NON_DEFINIE" | "PHYSIQUE" | "VIRTUEL" | "CLOUD" | "BARRE_METAL";
    platform?: string;
    applicationId: string;
}

export interface UpdateHostingDto {
    provider?: string;
    label?: string;
    region?: string;
    site?: string;
    nature?: "NON_DEFINIE" | "PHYSIQUE" | "VIRTUEL" | "CLOUD" | "BARRE_METAL";
    platform?: string;
    applicationId?: string;
}

export interface CreateAnomalyNotificationRequestDto {
    applicationId: string;
    description: string;
    status: object;
}

export interface UpdateAnomalyNotificationDto {
    /** Le nouveau statut de la notification d'anomalie */
    status: "in_pending" | "in_progress" | "done";
}

export type AnomalyNotification = object;

export interface CreateOrganizationDto {
    /**
     * Nom de l'organisation
     * @example "Direction de la transformation numérique"
     */
    label: string;
    /**
     * url de l'organisation
     * @example ""
     */
    url?: string;
    /**
     * sigle de l'organisation
     * @example "dtnum"
     */
    sigle?: string;
    /**
     * L'identifiant de l'organisation
     * @example "f09ed26a-8415-476a-be3b-ada479291c34"
     */
    parentId?: string;
}

export type PatchOrganizationDto = object;

export interface CreateActorTypeDto {
    /**
     * Code du type d'acteur
     * @example "MOA"
     */
    code: string;
    /**
     * Libellé du type d'acteur
     * @example "Maîtrise d’Ouvrage"
     */
    label: string;
    /**
     * description du type d'acteur
     * @example "La MOA définit les besoins du projet, supervise sa mise en œuvre et veille à ce que les objectifs métiers soient atteints."
     */
    description?: string;
}

export type PatchActorTypeDto = object;

export interface CreateActorDto {
    /**
     * Rôle de l'acteur
     * @example "Responsable"
     */
    role?: string;
    /**
     * Email de l'acteur (Optionel)
     * @example "example@example.com"
     */
    email?: string;
    /**
     * Prénom de l’acteur
     * @example "Jean"
     */
    firstname?: string;
    /**
     * Nom de l’acteur
     * @example "Dupont"
     */
    lastname?: string;
    /**
     * ID du type d'acteur lié
     * @example "5708d232-8338-4abf-8f38-8370acc89497"
     */
    actorTypeId: string;
    /**
     * ID de l'organization lié (Optionel)
     * @example "9965dc19-1c5a-472d-83e3-8bf65093c86c"
     */
    organizationId?: string;
    /**
     * ID de l'application lié (Optionel)
     * @example "035869dc-47a6-4cee-828f-f6a28d050b35"
     */
    applicationId?: string;
}

export type UpdateActorDto = object;

export interface CreateEventDto {
    /** @format date-time */
    start?: string;
    /** @format date-time */
    end?: string;
    type: {};
    description: string;
}

export type Event = GetEvent;

export interface GetEvent {
    id: string;
    /** @format date-time */
    start?: string;
    /** @format date-time */
    end?: string;
    type: string;
    description: string;
}

export interface CetLink {
    id: string;
    link: string;
    type: {};
    description?: string;
    applicationId?: string;
}
export interface CreateLinkDto {
    link: string;
    type: {};
    description?: string;
    applicationId?: string;
}

import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (
        securityData: SecurityDataType | null,
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance;
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private secure?: boolean;
    private format?: ResponseType;

    constructor({securityWorker, secure, format, ...axiosConfig}: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({...axiosConfig, baseURL: axiosConfig.baseURL || ""});
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method);

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        } else {
            return `${formItem}`;
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent: any[] = property instanceof Array ? property : [property];

            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }

            return formData;
        }, new FormData());
    }

    public request = async <T = any, _E = any>({
                                                   secure,
                                                   path,
                                                   type,
                                                   query,
                                                   format,
                                                   body,
                                                   ...params
                                               }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;

        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
            body = this.createFormData(body as Record<string, unknown>);
        }

        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
            body = JSON.stringify(body);
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type ? {"Content-Type": type} : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        });
    };
}

/**
 * @title API Référentiel Applications
 * @version 2.0
 * @contact
 *
 * API pour la gestion des applications
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    api = {
        /**
         * No description
         *
         * @name AppControllerGetHello
         * @request GET:/api/v2
         * @secure
         */
        appControllerGetHello: (params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/api/v2`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags relation
         * @name RelationControllerCreate
         * @summary Créer une nouvelle relation
         * @request POST:/api/v2/relations
         * @secure
         */
        relationControllerCreate: (data: RelationApplicationDto, params: RequestParams = {}) =>
            this.request<Label, any>({
                path: `/api/v2/relations`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags relation
         * @name RelationControllerFindAll
         * @summary Récupérer toutes les relations
         * @request GET:/api/v2/relations
         * @secure
         */
        relationControllerFindAll: (params: RequestParams = {}) =>
            this.request<object[], any>({
                path: `/api/v2/relations`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags relation
         * @name RelationControllerFindOne
         * @summary Récupérer une relation par son identifiant unique
         * @request GET:/api/v2/relations/{id}
         * @secure
         */
        relationControllerFindOne: (id: string, params: RequestParams = {}) =>
            this.request<Label, any>({
                path: `/api/v2/relations/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags relation
         * @name RelationControllerUpdate
         * @summary Mettre à jour une relation
         * @request PATCH:/api/v2/relations/{id}
         * @secure
         */
        relationControllerUpdate: (id: string, data: RelationApplicationDto, params: RequestParams = {}) =>
            this.request<Label, any>({
                path: `/api/v2/relations/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags relation
         * @name RelationControllerDelete
         * @summary Supprimer une relation
         * @request DELETE:/api/v2/relations/{id}
         * @secure
         */
        relationControllerDelete: (id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/relations/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description **Ce endpoint permet de créer une application complète.** Vous devez fournir les informations suivantes : - **label**: Le libellé de l'application. - **shortName**: Le nom court de l'application. - **logo**: L'URL du logo (peut être vide). - **description**: Une description détaillée de l'application. - **purposes**: Les domaines d'activité (ex: finance, HR, operations). - **tags**: Des tags pour catégoriser l'application. - **firstProductionDate**: Date de première mise en production. - **plannedDecommissioningDate**: Date prévue de déclassement. - **labels**: Les différents libellés alternatifs de l'application. - **source**: La source de l'application. - **value**: Le libellé de l'application. - **shortname**: Le nom court de l'application. - **compliances**: La liste des conformités associées avec : - **type**: Le type de conformité (Enum: regulation, standard, policy, contractual, security, privacy). - **name**: Le nom de la conformité. - **status**: Le statut (Enum: compliant, non_compliant, partially_compliant, not_concerned). - **validityStart**: Date de début de validité. - **validityEnd**: Date de fin de validité. - **scoreValue**: Valeur du score. - **scoreUnit**: Unité du score. - **notes**: Notes complémentaires.
         *
         * @tags applications
         * @name ApplicationControllerCreate
         * @summary Créer une nouvelle application
         * @request POST:/api/v2/applications
         * @secure
         */
        applicationControllerCreate: (data: CreateApplicationDto, params: RequestParams = {}) =>
            this.request<void, void>({
                path: `/api/v2/applications`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Ce endpoint permet de récupérer la liste de toutes les applications existantes dans le système. Aucun paramètre n'est requis pour accéder à cette liste.
         *
         * @tags applications
         * @name ApplicationControllerFindAll
         * @summary Récupérer les applications
         * @request GET:/api/v2/applications
         * @secure
         */
        applicationControllerFindAll: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags applications
         * @name ApplicationControllerSearchApplications
         * @summary Rechercher des applications
         * @request GET:/api/v2/applications/search
         * @secure
         */
        applicationControllerSearchApplications: (
            query?: {
                /**
                 * Filtrer par lien d'application
                 * @example "https://example.com/"
                 */
                link?: string;
                /**
                 * Filtrer par label ou shortname de l'application
                 * @example "Mon Application"
                 */
                label?: string;
                /**
                 * Numéro de la page pour la pagination
                 * @min 0
                 * @example 0
                 */
                page?: number;
                /**
                 * Nombre d'éléments par page
                 * @min 1
                 * @example 12
                 */
                limit?: number;
                tag?: string[];
                shortName?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/api/v2/applications/search`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags applications
         * @name ApplicationControllerExportExcel
         * @request GET:/api/v2/applications/export/excel
         * @secure
         */
        applicationControllerExportExcel: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/export/excel`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Ce endpoint permet de récupérer les détails complets d'une application en fonction de son identifiant unique. Le paramètre **id** doit être fourni dans l'URL.
         *
         * @tags applications
         * @name ApplicationControllerFindOne
         * @summary Récupérer une application spécifique par ID
         * @request GET:/api/v2/applications/{id}
         * @secure
         */
        applicationControllerFindOne: (id: string, params: RequestParams = {}) =>
            this.request<GetApplicationDto, any>({
                path: `/api/v2/applications/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Ce endpoint permet de mettre à jour une application existante. Vous devez fournir l'identifiant de l'application dans l'URL et les nouvelles données dans le corps de la requête. Les données de mise à jour doivent correspondre aux champs.
         *
         * @tags applications
         * @name ApplicationControllerUpdate
         * @summary Mettre à jour une application
         * @request PATCH:/api/v2/applications/{id}
         * @secure
         */
        applicationControllerUpdate: (id: string, data: PatchApplicationDto, params: RequestParams = {}) =>
            this.request<PatchApplicationDto, any>({
                path: `/api/v2/applications/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Supprime une application par son ID.
         *
         * @tags applications
         * @name ApplicationControllerRemove
         * @summary Supprimer une application
         * @request DELETE:/api/v2/applications/{id}
         * @secure
         */
        applicationControllerRemove: (id: string, params: RequestParams = {}) =>
            this.request<void, void>({
                path: `/api/v2/applications/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description **Ce endpoint permet de créer un label complet.** Vous devez fournir les informations suivantes : - **source**: La source de l'application. - **value**: Le libellé de l'application. - **shortname**: Le nom court de l'application (peut être vide).
         *
         * @tags Labels
         * @name LabelsControllerCreate
         * @summary Créer un nouveau label
         * @request POST:/api/v2/applications/{applicationId}/labels
         * @secure
         */
        labelsControllerCreate: (applicationId: string, data: CreateLabelDto, params: RequestParams = {}) =>
            this.request<Label, any>({
                path: `/api/v2/applications/${applicationId}/labels`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Ce endpoint permet de récupérer la liste de tous les labels d'une application en fonction de son identifiant unique. Le paramètre **applicationId** doit être fourni dans l'URL.
         *
         * @tags Labels
         * @name LabelsControllerFindAllSorted
         * @summary Récupérer les labels par ID d'application
         * @request GET:/api/v2/applications/{applicationId}/labels
         * @secure
         */
        labelsControllerFindAllSorted: (applicationId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/labels`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Labels
         * @name LabelsControllerUpdate
         * @summary Mettre à jour un label existant
         * @request PATCH:/api/v2/applications/{applicationId}/labels/{id}
         * @secure
         */
        labelsControllerUpdate: (applicationId: string, id: string, data: CreateLabelDto, params: RequestParams = {}) =>
            this.request<Label, any>({
                path: `/api/v2/applications/${applicationId}/labels/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Ce endpoint permet de supprimer un label existant. Vous devez fournir l'identifiant du label dans l'URL.
         *
         * @tags Labels
         * @name LabelsControllerDelete
         * @summary Supprimer un label
         * @request DELETE:/api/v2/applications/{applicationId}/labels/{id}
         * @secure
         */
        labelsControllerDelete: (applicationId: string, id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/labels/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Hostings
         * @name HostingsControllerCreate
         * @summary Créer un hébergement pour une application
         * @request POST:/api/v2/applications/{applicationId}/hostings
         * @secure
         */
        hostingsControllerCreate: (applicationId: string, data: CreateHostingDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/hostings`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Hostings
         * @name HostingsControllerFindAll
         * @summary Récupérer tous les hébergements d'une application
         * @request GET:/api/v2/applications/{applicationId}/hostings
         * @secure
         */
        hostingsControllerFindAll: (applicationId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/hostings`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Hostings
         * @name HostingsControllerFindOne
         * @summary Récupérer un hébergement par ID pour une application
         * @request GET:/api/v2/applications/{applicationId}/hostings/{id}
         * @secure
         */
        hostingsControllerFindOne: (id: string, applicationId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/hostings/${id}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Hostings
         * @name HostingsControllerUpdate
         * @summary Mettre à jour un hébergement pour une application
         * @request PATCH:/api/v2/applications/{applicationId}/hostings/{id}
         * @secure
         */
        hostingsControllerUpdate: (id: string, applicationId: string, data: UpdateHostingDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/hostings/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Hostings
         * @name HostingsControllerRemove
         * @summary Supprimer un hébergement pour une application
         * @request DELETE:/api/v2/applications/{applicationId}/hostings/{id}
         * @secure
         */
        hostingsControllerRemove: (id: string, applicationId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/hostings/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Sites
         * @name SitesControllerFindDistinctSites
         * @summary Liste des sites distincts existants
         * @request GET:/api/v2/sites/distinct
         * @secure
         */
        sitesControllerFindDistinctSites: (params: RequestParams = {}) =>
            this.request<string[], any>({
                path: `/api/v2/sites/distinct`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags Sites
         * @name SitesControllerFindApplications
         * @summary Récupérer les applications associées à un site
         * @request GET:/api/v2/sites/{site}/applications
         * @secure
         */
        sitesControllerFindApplications: (site: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/sites/${site}/applications`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Notifications
         * @name AnomalyNotificationControllerCreate
         * @summary Demande de modification pour une fiche application
         * @request POST:/api/v2/anomaly-notifications
         * @secure
         */
        anomalyNotificationControllerCreate: (data: CreateAnomalyNotificationRequestDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/anomaly-notifications`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Notifications
         * @name AnomalyNotificationControllerFindAll
         * @request GET:/api/v2/anomaly-notifications
         * @secure
         */
        anomalyNotificationControllerFindAll: (
            query?: {
                userId?: string;
                applicationId?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<void, any>({
                path: `/api/v2/anomaly-notifications`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Notifications
         * @name AnomalyNotificationControllerFindByCurrentUser
         * @summary Récupérer les notifications de signalements pour l'utilisateur actuellement connecté
         * @request GET:/api/v2/anomaly-notifications/user-notifications
         * @secure
         */
        anomalyNotificationControllerFindByCurrentUser: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/anomaly-notifications/user-notifications`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Notifications
         * @name AnomalyNotificationControllerFindOne
         * @summary Récupérer une notification spécifique par ID
         * @request GET:/api/v2/anomaly-notifications/{id}
         * @secure
         */
        anomalyNotificationControllerFindOne: (id: string, params: RequestParams = {}) =>
            this.request<Label, any>({
                path: `/api/v2/anomaly-notifications/${id}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags Notifications
         * @name AnomalyNotificationControllerUpdate
         * @summary Mettre à jour une notification
         * @request PATCH:/api/v2/anomaly-notifications/{id}
         * @secure
         */
        anomalyNotificationControllerUpdate: (id: string, data: UpdateAnomalyNotificationDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/anomaly-notifications/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Notifications
         * @name AnomalyNotificationControllerRemove
         * @summary Supprimer une notification
         * @request DELETE:/api/v2/anomaly-notifications/{id}
         * @secure
         */
        anomalyNotificationControllerRemove: (id: string, params: RequestParams = {}) =>
            this.request<AnomalyNotification, any>({
                path: `/api/v2/anomaly-notifications/${id}`,
                method: "DELETE",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Exécute une requête basique vers la base de données pour vérifier la connectivité et l'état global de l'application.
         *
         * @tags Health Check
         * @name HealthCheckControllerCheckHealth
         * @summary Vérification de la santé de l'application
         * @request GET:/api/v2/health-check
         * @secure
         */
        healthCheckControllerCheckHealth: (params: RequestParams = {}) =>
            this.request<any, any>({
                path: `/api/v2/health-check`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description **Ce endpoint permet de créer une organisation complète** Vous devez fournir les informations suivantes : - **label**: Le libellé de l'organisation - **url**: L'url de l'organisation - **sigle**: Le sigle de l'organisation - **parentId**: L'identifiant de l'organisation parente
         *
         * @tags organizations
         * @name OrganizationControllerCreate
         * @summary Créer une nouvelle organisation
         * @request POST:/api/v2/organizations
         * @secure
         */
        organizationControllerCreate: (data: CreateOrganizationDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/organizations`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationControllerFindAll
         * @request GET:/api/v2/organizations
         * @secure
         */
        organizationControllerFindAll: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/organizations`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Ce endpoint permet de récupérer les détails complets d'une organisation en fonction de son identifiant unique.
         *
         * @tags organizations
         * @name OrganizationControllerFindOne
         * @summary Récupérer une organisation spécifique par ID
         * @request GET:/api/v2/organizations/{id}
         * @secure
         */
        organizationControllerFindOne: (id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/organizations/${id}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Ce endpoint permet de mettre à jour une organisation existante Vous devez fournir l'identifiant de l'organisation dans l'URL et les nouvelles données dans le corps de la requête Les données de mise à jour doivent correspondre aux champs
         *
         * @tags organizations
         * @name OrganizationControllerUpdate
         * @summary Mettre à jour une organisation
         * @request PATCH:/api/v2/organizations/{id}
         * @secure
         */
        organizationControllerUpdate: (id: string, data: PatchOrganizationDto, params: RequestParams = {}) =>
            this.request<PatchOrganizationDto, any>({
                path: `/api/v2/organizations/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationControllerDelete
         * @summary Supprimer une organisation
         * @request DELETE:/api/v2/organizations/{id}
         * @secure
         */
        organizationControllerDelete: (id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/organizations/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description **Ce endpoint permet de créer un type d’acteur complète** Vous devez fournir les informations suivantes : - **code**: Le code du type d’acteur - **label**: Le libellé du type d’acteur - **description**: La description du type d’acteur
         *
         * @tags actorTypes
         * @name ActorTypeControllerCreate
         * @summary Créer un nouveau type d’acteur
         * @request POST:/api/v2/actorTypes
         * @secure
         */
        actorTypeControllerCreate: (data: CreateActorTypeDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/actorTypes`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags actorTypes
         * @name ActorTypeControllerFindAll
         * @request GET:/api/v2/actorTypes
         * @secure
         */
        actorTypeControllerFindAll: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/actorTypes`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Cet endpoint permet de récupérer les détails complets d'un type d’acteur en fonction de son identifiant unique.
         *
         * @tags actorTypes
         * @name ActorTypeControllerFindOne
         * @summary Récupérer un type d’acteur spécifique par ID
         * @request GET:/api/v2/actorTypes/{id}
         * @secure
         */
        actorTypeControllerFindOne: (id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/actorTypes/${id}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Ce endpoint permet de mettre à jour un type d’acteur existante Vous devez fournir l'identifiant du type d’acteur dans l'URL et les nouvelles données dans le corps de la requête Les données de mise à jour doivent correspondre aux champs
         *
         * @tags actorTypes
         * @name ActorTypeControllerUpdate
         * @summary Mettre à jour un type d’acteur
         * @request PATCH:/api/v2/actorTypes/{id}
         * @secure
         */
        actorTypeControllerUpdate: (id: string, data: PatchActorTypeDto, params: RequestParams = {}) =>
            this.request<PatchActorTypeDto, any>({
                path: `/api/v2/actorTypes/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags actorTypes
         * @name ActorTypeControllerDelete
         * @summary Supprimer un type d’acteur
         * @request DELETE:/api/v2/actorTypes/{id}
         * @secure
         */
        actorTypeControllerDelete: (id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/actorTypes/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description Ce endpoint permet de créer un acteur complet. Informations requises : - **role** : Rôle de l'acteur - **email** : Email de l'acteur - **firstname** : Prénom de l'acteur - **lastname** : Nom de l'acteur - **actorTypeId** : ID du type d'acteur lié à l'acteur - **organizationId** : ID de l'organisation liée à l'acteur - **applicationId** : ID de l'application liée à l'acteur
         *
         * @tags Actors
         * @name ActorControllerCreate
         * @summary Créer un nouvel acteur
         * @request POST:/api/v2/applications/{applicationId}/actors
         * @secure
         */
        actorControllerCreate: (applicationId: any, data: CreateActorDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/actors`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Actors
         * @name ActorControllerFindAll
         * @summary Récupérer tous les acteurs
         * @request GET:/api/v2/applications/{applicationId}/actors
         * @secure
         */
        actorControllerFindAll: (applicationId: any, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/actors`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Actors
         * @name ActorControllerFindOne
         * @summary Récupérer un acteur par ID
         * @request GET:/api/v2/applications/{applicationId}/actors/{id}
         * @secure
         */
        actorControllerFindOne: (applicationId: string, id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/actors/${id}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Actors
         * @name ActorControllerUpdated
         * @summary Mettre à jour un acteur
         * @request PATCH:/api/v2/applications/{applicationId}/actors/{id}
         * @secure
         */
        actorControllerUpdated: (applicationId: string, id: string, data: UpdateActorDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/actors/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Actors
         * @name ActorControllerDelete
         * @summary Supprimer un acteur
         * @request DELETE:/api/v2/applications/{applicationId}/actors/{id}
         * @secure
         */
        actorControllerDelete: (applicationId: string, id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/actors/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description Types d'événement : under_construction, in_production, decommissioned, decommissioning, highlight
         *
         * @tags Events
         * @name EventsControllerCreate
         * @summary Créer un nouvel événement
         * @request POST:/api/v2/applications/{applicationId}/events
         * @secure
         */
        eventsControllerCreate: (applicationId: string, data: CreateEventDto, params: RequestParams = {}) => {

            console.log(data)
            this.request<Event, any>({
                path: `/api/v2/applications/${applicationId}/events`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            })
        },

        /**
         * No description
         *
         * @tags Events
         * @name EventsControllerFindAll
         * @summary Récupérer tous les événements de l'application
         * @request GET:/api/v2/applications/{applicationId}/events
         * @secure
         */
        eventsControllerFindAll: (
            applicationId: string,
            query?: {
                applicationId?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<GetEvent[], any>({
                path: `/api/v2/applications/${applicationId}/events`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Events
         * @name EventsControllerFindOne
         * @summary Récupérer un événement par ID
         * @request GET:/api/v2/applications/{applicationId}/events/{id}
         * @secure
         */
        eventsControllerFindOne: (applicationId: string, id: string, params: RequestParams = {}) =>
            this.request<Event, any>({
                path: `/api/v2/applications/${applicationId}/events/${id}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Types d'événement : under_construction, in_production, decommissioned, decommissioning, highlight
         *
         * @tags Events
         * @name EventsControllerUpdate
         * @summary Mettre à jour un événement existant
         * @request PATCH:/api/v2/applications/{applicationId}/events/{id}
         * @secure
         */
        eventsControllerUpdate: (applicationId: string, id: string, data: CreateEventDto, params: RequestParams = {}) =>
            this.request<Event, any>({
                path: `/api/v2/applications/${applicationId}/events/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * No description
         *
         * @tags Events
         * @name EventsControllerDelete
         * @summary Supprimer un événement
         * @request DELETE:/api/v2/applications/{applicationId}/events/{id}
         * @secure
         */
        eventsControllerDelete: (applicationId: string, id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/events/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Links
         * @name LinksControllerCreate
         * @summary Create a new link for an application
         * @request POST:/api/v2/applications/{applicationId}/links
         * @secure
         */
        linksControllerCreate: (applicationId: string, data: CreateLinkDto, params: RequestParams = {}) => {
            console.log(data)
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/links`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            })
        },

        /**
         * No description
         *
         * @tags Links
         * @name LinksControllerFindAll
         * @summary Retrieve all links for an application
         * @request GET:/api/v2/applications/{applicationId}/links
         * @secure
         */
        linksControllerFindAll: (applicationId: string, params: RequestParams = {}) =>
            this.request<CetLink[], any>({
                path: `/api/v2/applications/${applicationId}/links`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Links
         * @name LinksControllerUpdate
         * @summary Update a link for an application
         * @request PATCH:/api/v2/applications/{applicationId}/links/{id}
         * @secure
         */
        linksControllerUpdate: (applicationId: string, id: string, data: CreateLinkDto, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/links/${id}`,
                method: "PATCH",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Links
         * @name LinksControllerDelete
         * @summary Delete a link for an application
         * @request DELETE:/api/v2/applications/{applicationId}/links/{id}
         * @secure
         */
        linksControllerDelete: (applicationId: string, id: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/v2/applications/${applicationId}/links/${id}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),
    };
}
