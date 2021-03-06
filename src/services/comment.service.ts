import ApiService, { backendUrl } from "./api.service";

class CommentError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
  }
}

interface CreateData {
  content: string;
  image_id: string | null;
}

const CommentService = {
  async get(commentPublicId: string) {
    const resource: string = `${backendUrl}/comment/get/${commentPublicId}`;

    ApiService.setHeader();

    try {
      const apiResponse = await ApiService.get(resource);
      return apiResponse.data.comment;
    } catch (error) {
      throw new CommentError(error.response.data.message);
    }
  }, // Get specific comment

  async like(commentPublicId: string) {
    const resource: string = `${backendUrl}/like/comment/${commentPublicId}`;

    ApiService.setHeader();

    try {
      const apiResponse = await ApiService.post(resource, null);

      // Returns a boolean
      return apiResponse.data.success;
    } catch (error) {
      throw new CommentError(error.response.data.message);
    }
  }, // Like comment

  async unlike(commentPublicId: string) {
    const resource: string = `${backendUrl}/like/comment/${commentPublicId}`;

    ApiService.setHeader();

    try {
      const apiResponse = await ApiService.delete(resource);

      // Returns a boolean
      return apiResponse.data.success;
    } catch (error) {
      throw new CommentError(error.response.data.message);
    }
  }, // Unlike comment

  async create(postPublicId: string, data: CreateData) {
    const resource: string = `${backendUrl}/comment/create/${postPublicId}`;

    ApiService.setHeader();

    try {
      const apiResponse = await ApiService.post(resource, data);

      // Return newly created commment.
      return apiResponse.data.comment;
    } catch (error) {
      throw new CommentError(error.response.data.message);
    }
  }, // Comment on a post

  async update(content: string, commentPublicId: string) {
    const resource: string = `${backendUrl}/comment/update/${commentPublicId}`;

    ApiService.setHeader();

    try {
      const apiResponse = await ApiService.put(resource, {
        content
      });

      // Return success boolean
      return apiResponse.data.success;
    } catch (error) {
      throw new CommentError(error.response.data.message);
    }
  }, // Update comment

  async delete(commentPublicId: string) {
    const resource: string = `${backendUrl}/comment/delete/${commentPublicId}`;

    ApiService.setHeader();

    try {
      const apiResponse = await ApiService.delete(resource);

      // Returns true if succeeded.
      return apiResponse.data.success;
    } catch (error) {
      throw new CommentError(error.response.data.message);
    }
  } // Delete comment
};

export default CommentService;
export { CommentService, CommentError, CreateData };
