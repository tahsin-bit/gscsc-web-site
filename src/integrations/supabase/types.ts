export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      alumni_members: {
        Row: {
          active: boolean
          bio: string | null
          company: string | null
          created_at: string
          display_order: number | null
          email: string | null
          github_url: string | null
          graduation_year: number | null
          id: string
          image_url: string | null
          job_title: string | null
          linkedin_url: string | null
          name: string
          twitter_url: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          bio?: string | null
          company?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          github_url?: string | null
          graduation_year?: number | null
          id?: string
          image_url?: string | null
          job_title?: string | null
          linkedin_url?: string | null
          name: string
          twitter_url?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          bio?: string | null
          company?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          github_url?: string | null
          graduation_year?: number | null
          id?: string
          image_url?: string | null
          job_title?: string | null
          linkedin_url?: string | null
          name?: string
          twitter_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      campus_ambassadors: {
        Row: {
          active: boolean
          ca_number: number
          created_at: string
          department: string | null
          email: string | null
          id: string
          image_url: string | null
          institution: string | null
          name: string
          phone: string | null
          points: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          ca_number: number
          created_at?: string
          department?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          institution?: string | null
          name: string
          phone?: string | null
          points?: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          ca_number?: number
          created_at?: string
          department?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          institution?: string | null
          name?: string
          phone?: string | null
          points?: number
          updated_at?: string
        }
        Relationships: []
      }
      club_partners: {
        Row: {
          active: boolean
          bio: string | null
          created_at: string
          display_order: number | null
          email: string | null
          facebook_url: string | null
          id: string
          image_url: string | null
          instagram_url: string | null
          linkedin_url: string | null
          name: string
          organization: string | null
          role_title: string | null
          twitter_url: string | null
          updated_at: string
          website_url: string | null
        }
        Insert: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          linkedin_url?: string | null
          name: string
          organization?: string | null
          role_title?: string | null
          twitter_url?: string | null
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          linkedin_url?: string | null
          name?: string
          organization?: string | null
          role_title?: string | null
          twitter_url?: string | null
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          handled: boolean
          id: string
          message: string
          name: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          handled?: boolean
          id?: string
          message: string
          name: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          handled?: boolean
          id?: string
          message?: string
          name?: string
          subject?: string | null
        }
        Relationships: []
      }
      event_categories: {
        Row: {
          active: boolean
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      event_images: {
        Row: {
          active: boolean
          created_at: string
          display_order: number | null
          event_id: string
          id: string
          image_url: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          display_order?: number | null
          event_id: string
          id?: string
          image_url: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          display_order?: number | null
          event_id?: string
          id?: string
          image_url?: string
          updated_at?: string
        }
        Relationships: []
      }
      event_registration_forms: {
        Row: {
          active: boolean
          category_id: string
          created_at: string
          event_id: string
          form_fields: Json
          id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          category_id: string
          created_at?: string
          event_id: string
          form_fields?: Json
          id?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          category_id?: string
          created_at?: string
          event_id?: string
          form_fields?: Json
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_registration_forms_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registration_forms_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_registrations: {
        Row: {
          category_id: string
          created_at: string
          event_id: string
          id: string
          registration_data: Json
          status: Database["public"]["Enums"]["registration_status"]
        }
        Insert: {
          category_id: string
          created_at?: string
          event_id: string
          id?: string
          registration_data?: Json
          status?: Database["public"]["Enums"]["registration_status"]
        }
        Update: {
          category_id?: string
          created_at?: string
          event_id?: string
          id?: string
          registration_data?: Json
          status?: Database["public"]["Enums"]["registration_status"]
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          active: boolean
          cover_image_url: string | null
          created_at: string
          description: string | null
          ends_at: string | null
          google_form_id: string | null
          google_form_mapping: Json | null
          google_form_mode: string | null
          google_form_url: string | null
          id: string
          location: string | null
          photos_url: string | null
          starts_at: string | null
          status: Database["public"]["Enums"]["event_status"]
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          ends_at?: string | null
          google_form_id?: string | null
          google_form_mapping?: Json | null
          google_form_mode?: string | null
          google_form_url?: string | null
          id?: string
          location?: string | null
          photos_url?: string | null
          starts_at?: string | null
          status?: Database["public"]["Enums"]["event_status"]
          title: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          ends_at?: string | null
          google_form_id?: string | null
          google_form_mapping?: Json | null
          google_form_mode?: string | null
          google_form_url?: string | null
          id?: string
          location?: string | null
          photos_url?: string | null
          starts_at?: string | null
          status?: Database["public"]["Enums"]["event_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      executive_members: {
        Row: {
          active: boolean
          bio: string | null
          created_at: string
          display_order: number | null
          email: string | null
          facebook_url: string | null
          id: string
          image_url: string | null
          instagram_url: string | null
          name: string
          title: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          name: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          name?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      join_requests: {
        Row: {
          account_name: string | null
          account_number: string | null
          blood_group: string | null
          college_roll: string
          created_at: string
          departments: Database["public"]["Enums"]["department_type"][]
          email: string
          full_name: string
          id: string
          payment_type: string | null
          phone: string | null
          section: string | null
          status: Database["public"]["Enums"]["join_status"]
          total_amount: number | null
          transaction_id: string | null
        }
        Insert: {
          account_name?: string | null
          account_number?: string | null
          blood_group?: string | null
          college_roll: string
          created_at?: string
          departments?: Database["public"]["Enums"]["department_type"][]
          email: string
          full_name: string
          id?: string
          payment_type?: string | null
          phone?: string | null
          section?: string | null
          status?: Database["public"]["Enums"]["join_status"]
          total_amount?: number | null
          transaction_id?: string | null
        }
        Update: {
          account_name?: string | null
          account_number?: string | null
          blood_group?: string | null
          college_roll?: string
          created_at?: string
          departments?: Database["public"]["Enums"]["department_type"][]
          email?: string
          full_name?: string
          id?: string
          payment_type?: string | null
          phone?: string | null
          section?: string | null
          status?: Database["public"]["Enums"]["join_status"]
          total_amount?: number | null
          transaction_id?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          id: string
          ip_hash: string | null
          occurred_at: string
          path: string
          referrer: string | null
          session_id: string | null
          user_agent: string | null
        }
        Insert: {
          id?: string
          ip_hash?: string | null
          occurred_at?: string
          path: string
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Update: {
          id?: string
          ip_hash?: string | null
          occurred_at?: string
          path?: string
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          active: boolean
          cover_image_url: string | null
          created_at: string
          demo_url: string | null
          description: string | null
          id: string
          repo_url: string | null
          summary: string | null
          title: string
          type: Database["public"]["Enums"]["project_type"]
          updated_at: string
        }
        Insert: {
          active?: boolean
          cover_image_url?: string | null
          created_at?: string
          demo_url?: string | null
          description?: string | null
          id?: string
          repo_url?: string | null
          summary?: string | null
          title: string
          type: Database["public"]["Enums"]["project_type"]
          updated_at?: string
        }
        Update: {
          active?: boolean
          cover_image_url?: string | null
          created_at?: string
          demo_url?: string | null
          description?: string | null
          id?: string
          repo_url?: string | null
          summary?: string | null
          title?: string
          type?: Database["public"]["Enums"]["project_type"]
          updated_at?: string
        }
        Relationships: []
      }
      publications: {
        Row: {
          abstract: string | null
          active: boolean
          authors: string | null
          cover_image_url: string | null
          created_at: string
          doi_url: string | null
          id: string
          pdf_url: string | null
          published_in: string | null
          title: string
          type: Database["public"]["Enums"]["publication_type"]
          updated_at: string
          year: number | null
        }
        Insert: {
          abstract?: string | null
          active?: boolean
          authors?: string | null
          cover_image_url?: string | null
          created_at?: string
          doi_url?: string | null
          id?: string
          pdf_url?: string | null
          published_in?: string | null
          title: string
          type: Database["public"]["Enums"]["publication_type"]
          updated_at?: string
          year?: number | null
        }
        Update: {
          abstract?: string | null
          active?: boolean
          authors?: string | null
          cover_image_url?: string | null
          created_at?: string
          doi_url?: string | null
          id?: string
          pdf_url?: string | null
          published_in?: string | null
          title?: string
          type?: Database["public"]["Enums"]["publication_type"]
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
      sub_executive_members: {
        Row: {
          active: boolean
          bio: string | null
          created_at: string
          display_order: number | null
          email: string | null
          facebook_url: string | null
          github_url: string | null
          id: string
          image_url: string | null
          instagram_url: string | null
          linkedin_url: string | null
          name: string
          title: string | null
          twitter_url: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          linkedin_url?: string | null
          name: string
          title?: string | null
          twitter_url?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          linkedin_url?: string | null
          name?: string
          title?: string | null
          twitter_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          active: boolean
          bio: string | null
          created_at: string
          display_order: number | null
          email: string | null
          facebook_url: string | null
          group: Database["public"]["Enums"]["team_group"]
          id: string
          image_url: string | null
          instagram_url: string | null
          name: string
          role_title: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          group: Database["public"]["Enums"]["team_group"]
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          name: string
          role_title?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          bio?: string | null
          created_at?: string
          display_order?: number | null
          email?: string | null
          facebook_url?: string | null
          group?: Database["public"]["Enums"]["team_group"]
          id?: string
          image_url?: string | null
          instagram_url?: string | null
          name?: string
          role_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      page_views_daily: {
        Row: {
          day: string | null
          views: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin"
      department_type:
        | "project_display_research_paper"
        | "wall_magazine_scrapbook"
        | "press_publications"
        | "photography_media"
        | "quizzing_circuit"
        | "olympiad_circuit"
        | "robotics_rocketry"
        | "public_relations"
        | "it"
        | "gaming_affairs"
      event_status: "upcoming" | "past"
      join_status: "pending" | "verified" | "rejected"
      project_type: "research" | "student" | "completed"
      publication_type: "journal" | "conference" | "research_paper"
      registration_status: "pending" | "approved" | "rejected"
      team_group: "faculty" | "advisory" | "general"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin"],
      department_type: [
        "project_display_research_paper",
        "wall_magazine_scrapbook",
        "press_publications",
        "photography_media",
        "quizzing_circuit",
        "olympiad_circuit",
        "robotics_rocketry",
        "public_relations",
        "it",
        "gaming_affairs",
      ],
      event_status: ["upcoming", "past"],
      join_status: ["pending", "verified", "rejected"],
      project_type: ["research", "student", "completed"],
      publication_type: ["journal", "conference", "research_paper"],
      registration_status: ["pending", "approved", "rejected"],
      team_group: ["faculty", "advisory", "general"],
    },
  },
} as const
