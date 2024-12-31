import { useState } from "react";
import { http, HttpResponse } from "msw";

import { dddAPI } from "@/utils/http";
import { APIResponse } from "@/types/response";

export interface NotificationVariables {
  position: string;
  support_path: string;
  name: string;
  email: string;
}

export interface Notification extends NotificationVariables {
  id: number;
  create_time: string;
  email_sent: number;
}

export const postNotificationHandler = http.post<object, NotificationVariables>(
  /v1\/notification/,
  async ({ request }) => {
    const requestBody = await request.json();

    const { position, support_path, name, email } = requestBody;

    if (!position || !support_path || !name || !email) {
      return HttpResponse.json(
        {
          code: 400,
          message: "Bad Request",
        },
        { status: 400 }
      );
    }

    return HttpResponse.json<APIResponse<Notification>>({
      code: 200,
      message: "Success",
      data: {
        id: 1,
        create_time: new Date().toISOString(),
        email_sent: 0,
        position,
        support_path,
        name,
        email,
      },
    });
  }
);

export default function usePostNotification() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const post = (
    variables: NotificationVariables,
    {
      onError,
      onSuccess,
    }: {
      onSuccess?: (
        data: Notification,
        variables: NotificationVariables
      ) => void;
      onError?: (error: unknown, variables: NotificationVariables) => void;
    } = {}
  ) => {
    (async () => {
      try {
        setIsPending(true);
        setIsError(false);

        const response = await dddAPI.post("v1/notification", {
          json: variables,
        });

        const { data } = await response.json<APIResponse<Notification>>();

        setIsPending(false);

        onSuccess?.(data, variables);
      } catch (error) {
        setIsPending(false);
        setIsError(true);

        setError(error);
        onError?.(error, variables);
      } finally {
        setIsPending(false);
        setError(null);
        setIsError(false);
      }
    })();
  };

  return { isPending, isError, post, error };
}
