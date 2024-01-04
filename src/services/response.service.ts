class ResponseService {
  http200(payload?: any) {
    return {
      success: true,
      data: payload
        ? payload
        : {
            message: "Request made satisfactorily.",
          },
      code: 200,
    };
  }

  http201() {
    return {
      success: true,
      data: {
        message: "Register correct!",
      },
      code: 201,
    };
  }

  http400(message: string = "The row object found") {
    return {
      success: false,
      data: {
        message,
      },
      code: 400,
    };
  }

  http401(message: string = "Error not authorized") {
    return {
      success: false,
      data: {
        message,
      },
      code: 401,
    };
  }

  http500(error?: any, message: string = "Error in server") {
    return {
      success: false,
      data: {
        message,
        error,
      },
      code: 500,
    };
  }
}

export const responseService = new ResponseService();
