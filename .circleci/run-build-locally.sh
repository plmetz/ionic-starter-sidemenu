#!/usr/bin/env bash
curl --user 9188d881d648eba94dbdd1c7ce06c6cb5b408cba: \
    --request POST \
    --form revision=703928fffe3f099abe47562ea7053f82ca470d66 \
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/plmetz/ionic-starter-sidemenu/tree/features/e2e_test
