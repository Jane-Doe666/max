
export type ServerRes = {
  code: number;
  headers: Headers;
  body?: string;
  message?: string;
}

export type ErrorServerRes = Error & ServerRes;

export type LogAnswer = {
  id?: number,
  scenarios_id: number,
  created_at?: string,
  updated_at?: string,
  scenarios_group_by: string,
  prompt: string,
  answer: string,
  group_by_uuid: string,
}


export type PromptData = {
  scenario?: string;
  prompt?: string;
  models?: string[];
  schema?: string;
  prompt_action?: string;
  prompt_actions?: string[];
}

export type ConfigDB = {
  user: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
}

// export type Container = {
//   alias: string;
// };

export type Container = {
  alias: string;
  category: string[];
  categories: string[];
  objects: JSON;
};



