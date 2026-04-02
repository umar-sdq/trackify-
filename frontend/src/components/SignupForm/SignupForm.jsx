const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: { name }
  }
});