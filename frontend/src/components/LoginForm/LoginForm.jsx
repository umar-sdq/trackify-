const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
});