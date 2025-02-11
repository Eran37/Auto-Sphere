export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          company: string;
          phone: string;
          email: string;
          problem: string;
          created_at: string;
          status: string;
        };
        Insert: {
          name: string;
          company: string;
          phone: string;
          email: string;
          problem: string;
          status?: string;
        };
      };
      chat_messages: {
        Row: {
          id: string;
          user_id: string;
          message: string;
          created_at: string;
          is_bot: boolean;
        };
        Insert: {
          user_id: string;
          message: string;
          is_bot?: boolean;
        };
      };
      company_logos: {
        Row: {
          id: string;
          name: string;
          logo_url: string;
          created_at: string;
          display_order: number;
        };
        Insert: {
          name: string;
          logo_url: string;
          display_order?: number;
        };
      };
    };
  };
}