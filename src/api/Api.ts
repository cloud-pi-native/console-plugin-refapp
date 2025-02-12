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

export interface CreateLifecycleDto {
  /** Status of the lifecycle (e.g., in_production) */
  status: "under_construction" | "in_production" | "decommissioned" | "decommissioning";
  /**
   * First production date (ISO 8601)
   * @example "2023-11-22"
   */
  firstProductionDate?: string;
  /**
   * Planned decommissioning date (ISO 8601)
   * @example "2025-12-31"
   */
  plannedDecommissioningDate?: string;
  /**
   * Associated metadata ID
   * @example "metadata123"
   */
  metadataId?: string;
}

export interface CreateActorDto {
  /** @example "" */
  role: string;
  /** @example "user123" */
  userId?: string;
  /**
   * Email of the actor (optional)
   * @example "example@example.com"
   */
  email?: string;
  type?:
    | "Responsable"
    | "Exploitation"
    | "ResponsableAutre"
    | "Hebergement"
    | "ArchitecteApplicatif"
    | "ArchitecteInfra"
    | "RepresentantSSI"
    | "Autre";
  /**
   * ID of the organization source (optional)
   * @example "orgSource123"
   */
  organizationId?: string;
  /**
   * ID of the associated application (optional)
   * @example "app789"
   */
  applicationId?: string;
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

export interface CreateExternalRessourceDto {
  /**
   * Link of the external ressource
   * @example "https://doc.fr"
   */
  link: string | null;
  /**
   * Description of the external ressource
   * @example "documentation de l'application"
   */
  description?: string | null;
  /** Type of external ressource (service, documentation, supervision) */
  type: "documentation" | "supervision" | "service";
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
  /** @default {"status":"under_construction","firstProductionDate":"2025-02-13T13:26:56.610Z"} */
  lifecycle: CreateLifecycleDto;
  /**
   * Liste des acteurs associés à l'application
   * @example [{"type":"Responsable","email":"exemple@exemple.fr"}]
   */
  actors: CreateActorDto[];
  /**
   * Liste des conformités associées à l’application
   * @example [{"type":"security","name":"ISO 27001","status":"compliant","validityStart":"2024-01-01T00:00:00.000Z","validityEnd":"2026-12-31T23:59:59.000Z","scoreValue":"95","scoreUnit":"%","notes":"Fully compliant with security standards."}]
   */
  compliances: CreateComplianceDto[];
  /**
   * Ressources externes (liens) associées à l'application
   * @example [{"link":"https://example.com/document.pdf","description":"Documentation de l'application","type":"documentation"}]
   */
  externalRessource?: CreateExternalRessourceDto[];
}

export interface GetApplicationDto {
  id: string;
  label: string;
  shortName: string | null;
  logo: string;
  description: string;
  purposes: string[];
  tags: string[];
  lifecycleId: string;
  parentId?: string;
}

export interface UpdateLifecycleDto {
  status?: "under_construction" | "in_production" | "decommissioned" | "decommissioning";
  /** @example "2023-11-22" */
  firstProductionDate?: string;
  /** @example "2025-12-31" */
  plannedDecommissioningDate?: string;
  /** @example "metadata123" */
  metadataId?: string;
}

export interface UpdateActorDto {
  /** @example "admin" */
  role?: string;
  /**
   * Email of the actor (optional)
   * @example "example@example.com"
   */
  email?: string;
  actorType?:
    | "Responsable"
    | "Exploitation"
    | "ResponsableAutre"
    | "Hebergement"
    | "ArchitecteApplicatif"
    | "ArchitecteInfra"
    | "RepresentantSSI"
    | "Autre";
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

export interface UpdateExternalRessourceDto {
  /** @example "https://example.com/document.pdf" */
  link?: string | null;
  /** @example "Document example" */
  description?: string | null;
  type?: "documentation" | "supervision" | "service";
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
  lifecycle?: UpdateLifecycleDto;
  actors?: UpdateActorDto[];
  compliances?: UpdateComplianceDto[];
  externalRessource?: UpdateExternalRessourceDto[];
}

export interface CreateAnomalyNotificationRequestDto {
  applicationId: string;
  description: string;
  status: object;
}

export interface ApplicationDto {
  id: string;
  label: string;
  ownerId: string;
}

export interface GetAnomalyNotificationDto {
  id: string;
  applicationId: string;
  application: ApplicationDto;
  notifierId: string;
  description: string;
  status: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateAnomalyNotificationDto {
  /** Le nouveau statut de la notification d'anomalie */
  status: "in_pending" | "in_progress" | "done";
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
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

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
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
        ...(type ? { "Content-Type": type } : {}),
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
     * @description **Ce endpoint permet de créer une application complète.** Vous devez fournir les informations suivantes : - **label**: Le libellé de l'application. - **shortName**: Le nom court de l'application. - **logo**: L'URL du logo (peut être vide). - **description**: Une description détaillée de l'application. - **purposes**: Les domaines d'activité (ex: finance, HR, operations). - **tags**: Des tags pour catégoriser l'application. - **parentId**: L'identifiant de l'application parente (ou null). - **lifecycle**: Un objet définissant le cycle de vie avec les champs : - **status**: Le statut (Enum: under_construction, in_production, decommissioned, decommissioning). - **firstProductionDate**: Date de première mise en production. - **plannedDecommissioningDate**: Date prévue de déclassement. - **actors**: La liste des acteurs associés avec : - **type**: Le type d'acteur (Enum: Responsable, Exploitation, ResponsableAutre, Hebergement, ArchitecteApplicatif, ArchitecteInfra, RepresentantSSI, Autre). - **email**: L'adresse email de l'acteur. - **compliances**: La liste des conformités associées avec : - **type**: Le type de conformité (Enum: regulation, standard, policy, contractual, security, privacy). - **name**: Le nom de la conformité. - **status**: Le statut (Enum: compliant, non_compliant, partially_compliant, not_concerned). - **validityStart**: Date de début de validité. - **validityEnd**: Date de fin de validité. - **scoreValue**: Valeur du score. - **scoreUnit**: Unité du score. - **notes**: Notes complémentaires. - **externalRessources**: Les liens externes associés avec : - **link**: L'URL. - **description**: La description. - **type**: Le type de ressource (Enum: documentation, supervision, service).
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
         * Filtrer par label de l'application
         * @example "Mon Application"
         */
        label?: string;
        /**
         * Filtrer par tag d'application
         * @example "tag:ref"
         */
        tag?: string[];
        /**
         * Numéro de la page pour la pagination
         * @min 1
         * @example 1
         */
        page?: number;
        /**
         * Nombre d'éléments par page
         * @min 1
         * @example 12
         */
        limit?: number;
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
     * @summary Récupérer toutes les notifications
     * @request GET:/api/v2/anomaly-notifications
     * @secure
     */
    anomalyNotificationControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/api/v2/anomaly-notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name AnomalyNotificationControllerGetAnomalyNotificationsByUser
     * @summary Récupérer les notifications de signalements pour l'utilisateur actuellement connecté
     * @request GET:/api/v2/anomaly-notifications/user-notifications
     * @secure
     */
    anomalyNotificationControllerGetAnomalyNotificationsByUser: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/v2/anomaly-notifications/user-notifications`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name AnomalyNotificationControllerGetNotificationsByApplicationId
     * @request GET:/api/v2/anomaly-notifications/{applicationId}
     * @secure
     */
    anomalyNotificationControllerGetNotificationsByApplicationId: (applicationId: string, params: RequestParams = {}) =>
      this.request<GetAnomalyNotificationDto[], any>({
        path: `/api/v2/anomaly-notifications/${applicationId}`,
        method: "GET",
        secure: true,
        format: "json",
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
      this.request<object, any>({
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
      this.request<void, any>({
        path: `/api/v2/anomaly-notifications/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name AnomalyNotificationControllerUpdateStatus
     * @summary Mettre à jour le statut d'une notification
     * @request PATCH:/api/v2/anomaly-notifications/update/{id}
     * @secure
     */
    anomalyNotificationControllerUpdateStatus: (
      id: string,
      data: UpdateAnomalyNotificationDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v2/anomaly-notifications/update/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
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
  };
}
